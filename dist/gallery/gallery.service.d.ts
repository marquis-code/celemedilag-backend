import { Model } from 'mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class GalleryService {
    private albumModel;
    private updatesGateway;
    constructor(albumModel: Model<AlbumDocument>, updatesGateway: UpdatesGateway);
    create(createAlbumDto: CreateAlbumDto): Promise<Album>;
    findAll(): Promise<Album[]>;
    findOne(id: string): Promise<Album>;
    update(id: string, updateAlbumDto: CreateAlbumDto): Promise<Album>;
    remove(id: string): Promise<Album>;
}
