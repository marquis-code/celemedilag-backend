import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sermon, SermonDocument } from './schemas/sermon.schema';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class SermonsService {
  constructor(
    @InjectModel(Sermon.name) private sermonModel: Model<SermonDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createSermonDto: CreateSermonDto): Promise<Sermon> {
    const newSermon = new this.sermonModel(createSermonDto);
    const saved = await newSermon.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'sermons', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Sermon[]> {
    return this.sermonModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Sermon> {
    const sermon = await this.sermonModel.findById(id).lean().exec();
    if (!sermon) {
      throw new NotFoundException(`Sermon #${id} not found`);
    }
    return sermon;
  }

  async update(id: string, updateSermonDto: CreateSermonDto): Promise<Sermon> {
    const sermon = await this.sermonModel.findByIdAndUpdate(id, updateSermonDto, { new: true }).exec();
    if (!sermon) throw new NotFoundException(`Sermon #${id} not found`);
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'sermons', action: 'update', data: sermon });
    return sermon;
  }

  async remove(id: string): Promise<Sermon> {
    const deletedSermon = await this.sermonModel.findByIdAndDelete(id).exec();
    if (!deletedSermon) {
      throw new NotFoundException(`Sermon #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'sermons', action: 'remove', id });
    return deletedSermon;
  }
}
