import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class UpdateSettingDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsObject()
  @IsNotEmpty()
  value: any;
}
