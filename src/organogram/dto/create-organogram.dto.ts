import { IsString, IsNumber, IsOptional, IsBoolean, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateOrganogramDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsNumber()
  order?: number;

  @IsOptional()
  @IsMongoId()
  parentId?: string | Types.ObjectId;

  @IsOptional()
  @IsBoolean()
  isGroup?: boolean;
}
