import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SermonDocument = Sermon & Document;

@Schema({ timestamps: true })
export class Sermon {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['Audio', 'Video', 'PDF'] })
  type: string;

  @Prop({ required: true })
  preacher: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  fileUrl: string;
}

export const SermonSchema = SchemaFactory.createForClass(Sermon);
