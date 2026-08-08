import { CloudinaryService } from './cloudinary.service';
export declare class UploadController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<{
        url: any;
        publicId: any;
    }>;
    uploadBulk(files: Express.Multer.File[]): Promise<{
        uploaded: {
            url: string;
            publicId: string;
            originalName: string;
        }[];
        failed: {
            originalName: string;
            error: string;
        }[];
        total: number;
        successCount: number;
        failedCount: number;
    }>;
}
