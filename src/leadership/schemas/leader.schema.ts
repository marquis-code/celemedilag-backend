import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaderDocument = Leader & Document;

@Schema({ timestamps: true })
export class Leader {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  tenure: string;

  @Prop({ required: false })
  imageUrl?: string;
}

export const LeaderSchema = SchemaFactory.createForClass(Leader);
