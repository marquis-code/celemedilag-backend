import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  albumName: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  photos: string[];
}
