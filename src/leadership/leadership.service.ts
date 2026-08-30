import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leader, LeaderDocument } from './schemas/leader.schema';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
import { CloudinaryService } from '../upload/cloudinary.service';
import csv from 'csv-parser';
import * as streamifier from 'streamifier';

@Injectable()
export class LeadershipService {
  constructor(
    @InjectModel(Leader.name) private leaderModel: Model<LeaderDocument>,
    private updatesGateway: UpdatesGateway,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(createLeaderDto: CreateLeaderDto): Promise<Leader> {
    const newLeader = new this.leaderModel(createLeaderDto);
    const saved = await newLeader.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Leader[]> {
    return this.leaderModel.find().sort({ order: 1, createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Leader> {
    const leader = await this.leaderModel.findById(id).lean().exec();
    if (!leader) {
      throw new NotFoundException(`Leader #${id} not found`);
    }
    return leader;
  }

  async update(id: string, updateLeaderDto: CreateLeaderDto): Promise<Leader> {
    const leader = await this.leaderModel.findByIdAndUpdate(id, updateLeaderDto, { new: true }).exec();
    if (!leader) throw new NotFoundException(`Leader #${id} not found`);
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'update', data: leader });
    return leader;
  }

  async remove(id: string): Promise<Leader> {
    const deletedLeader = await this.leaderModel.findByIdAndDelete(id).exec();
    if (!deletedLeader) {
      throw new NotFoundException(`Leader #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'remove', id });
    return deletedLeader;
  }

  async bulkUpload(csvFile: Express.Multer.File, images: Express.Multer.File[]): Promise<{ success: number, failed: number }> {
    const results: any[] = [];
    const imageMap = new Map<string, Express.Multer.File>();

    if (images && images.length > 0) {
      images.forEach(img => imageMap.set(img.originalname, img));
    }

    return new Promise((resolve, reject) => {
      streamifier.createReadStream(csvFile.buffer)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
          let success = 0;
          let failed = 0;

          for (const row of results) {
            try {
              let avatarUrl = '';
              const avatarFilename = row.avatar || row.image || row.photo;
              if (avatarFilename && imageMap.has(avatarFilename)) {
                const imgFile = imageMap.get(avatarFilename);
                if (imgFile) {
                  const uploadResult = await this.cloudinaryService.uploadFile(imgFile);
                  avatarUrl = uploadResult.secure_url;
                }
              } else if (avatarFilename && avatarFilename.startsWith('http')) {
                 avatarUrl = avatarFilename;
              }

              const newLeader = new this.leaderModel({
                name: row.name,
                position: row.position,
                tenure: row.tenure,
                session: row.session,
                isPastExco: row.isPastExco === 'true' || row.isPastExco === '1',
                avatar: avatarUrl,
                bio: row.bio,
                department: row.department,
                email: row.email,
                phone: row.phone,
                order: parseInt(row.order) || 99,
                courseOfStudy: row.courseOfStudy,
                socialLinks: {
                  twitter: row.twitter || '',
                  linkedin: row.linkedin || '',
                  instagram: row.instagram || '',
                  facebook: row.facebook || '',
                  tiktok: row.tiktok || '',
                  snapchat: row.snapchat || ''
                }
              });
              await newLeader.save();
              success++;
            } catch (error) {
              console.error('Failed to insert row:', row, error);
              failed++;
            }
          }
          
          this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'bulkUpload' });
          resolve({ success, failed });
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
