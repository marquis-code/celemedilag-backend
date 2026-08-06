import { IsArray, IsNotEmpty, IsString, IsOptional, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

class PhotoDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsOptional()
  caption?: string;
}

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  albumName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoDto)
  photos: PhotoDto[];
}
