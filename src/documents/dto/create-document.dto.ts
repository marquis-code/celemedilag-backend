import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { DocumentCategory } from '../schemas/document.schema';

export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(DocumentCategory)
  @IsNotEmpty()
  category: DocumentCategory;

  @IsString()
  @IsNotEmpty()
  pdfUrl: string;

  @IsString()
  @IsOptional()
  publicId?: string;
}
