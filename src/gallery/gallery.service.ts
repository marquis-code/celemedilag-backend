import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const newAlbum = new this.albumModel(createAlbumDto);
    const saved = await newAlbum.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'gallery', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Album[]> {
    return this.albumModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Album> {
    const album = await this.albumModel.findById(id).exec();
    if (!album) {
      throw new NotFoundException(`Album #${id} not found`);
    }
    return album;
  }

  async remove(id: string): Promise<Album> {
    const deletedAlbum = await this.albumModel.findByIdAndDelete(id).exec();
    if (!deletedAlbum) {
      throw new NotFoundException(`Album #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'gallery', action: 'remove', id });
    return deletedAlbum;
  }
}
