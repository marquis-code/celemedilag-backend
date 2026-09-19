import { GalleryService } from './gallery.service';
import { CreateAlbumDto } from './dto/create-album.dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    create(createAlbumDto: CreateAlbumDto): Promise<import("./schemas/album.schema").Album>;
    findAll(): Promise<import("./schemas/album.schema").Album[]>;
    findOne(id: string): Promise<import("./schemas/album.schema").Album>;
    update(id: string, updateAlbumDto: CreateAlbumDto): Promise<import("./schemas/album.schema").Album>;
    remove(id: string): Promise<import("./schemas/album.schema").Album>;
}
