import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaderDocument = Leader & Document;

@Schema({ timestamps: true })
export class Leader {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop()
  tenure: string;

  @Prop()
  avatar: string;

  @Prop()
  bio: string;

  @Prop()
  department: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({ type: { twitter: String, linkedin: String, instagram: String } })
  socialLinks: { twitter: string; linkedin: string; instagram: string };
}

export const LeaderSchema = SchemaFactory.createForClass(Leader);
