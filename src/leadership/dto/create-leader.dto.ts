import { IsNotEmpty, IsOptional, IsString, IsUrl, IsBoolean } from 'class-validator';

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

  @IsBoolean()
  @IsOptional()
  isPastExco?: boolean;

  @IsString()
  @IsOptional()
  session?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsOptional()
  order?: number;

  @IsString()
  @IsOptional()
  courseOfStudy?: string;

  @IsOptional()
  socialLinks?: { twitter?: string; linkedin?: string; instagram?: string; facebook?: string; tiktok?: string; snapchat?: string };
}
