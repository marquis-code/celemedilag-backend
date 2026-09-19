import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 0 })
  displayOrder: number;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  hodName: string;

  @Prop()
  hodPhotoUrl: string;

  @Prop()
  meetingDays: string;

  @Prop()
  bannerImageUrl: string;

  @Prop()
  membersCount: number;

  @Prop([String])
  responsibilities: string[];

  @Prop()
  contactEmail: string;

  @Prop()
  contactPhone: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
