import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSermonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsEnum(['Audio', 'Video', 'PDF'])
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  preacher: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  fileUrl: string;
}
