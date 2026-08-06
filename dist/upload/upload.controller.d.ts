import { CloudinaryService } from './cloudinary.service';
export declare class UploadController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<{
        url: any;
        publicId: any;
    }>;
}
