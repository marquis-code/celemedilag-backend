import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateLeaderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  tenure: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
