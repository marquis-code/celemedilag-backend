import { Controller, Post, UseInterceptors, UploadedFile, UploadedFiles, BadRequestException } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }
    const result = await this.cloudinaryService.uploadFile(file);
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  }

  @Post('bulk')
  @UseInterceptors(FilesInterceptor('files', 50))
  async uploadBulk(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files provided');
    }

    // Upload all files concurrently for maximum speed
    const results = await Promise.allSettled(
      files.map((file) => this.cloudinaryService.uploadFile(file)),
    );

    const uploaded: { url: string; publicId: string; originalName: string }[] = [];
    const failed: { originalName: string; error: string }[] = [];

    results.forEach((result, index) => {
      const originalName = files[index].originalname;
      if (result.status === 'fulfilled') {
        uploaded.push({
          url: result.value.secure_url,
          publicId: result.value.public_id,
          originalName,
        });
      } else {
        failed.push({
          originalName,
          error: result.reason?.message || 'Upload failed',
        });
      }
    });

    return { uploaded, failed, total: files.length, successCount: uploaded.length, failedCount: failed.length };
  }
}
