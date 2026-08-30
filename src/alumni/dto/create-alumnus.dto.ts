import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAlumnusDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  graduationYear: string;

  @IsString()
  @IsNotEmpty()
  profession: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  socialLinks?: { twitter?: string; linkedin?: string; instagram?: string; facebook?: string; tiktok?: string; snapchat?: string };
}
