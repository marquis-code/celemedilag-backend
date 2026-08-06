import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
}
