import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganogramDto } from './create-organogram.dto';

export class UpdateOrganogramDto extends PartialType(CreateOrganogramDto) {}
