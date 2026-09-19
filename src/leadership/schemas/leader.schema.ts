import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LeaderDocument = Leader & Document;

@Schema({ timestamps: true })
export class Leader {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ type: Types.ObjectId, ref: 'OrganogramNode', default: null })
  organogramNodeId: Types.ObjectId;

  @Prop()
  tenure: string;

  @Prop({ default: false })
  isPastExco: boolean;

  @Prop()
  session: string;

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

  @Prop({ default: 99 })
  order: number;

  @Prop()
  courseOfStudy: string;

  @Prop({ type: { twitter: String, linkedin: String, instagram: String, facebook: String, tiktok: String, snapchat: String } })
  socialLinks: { twitter: string; linkedin: string; instagram: string; facebook: string; tiktok: string; snapchat: string };
}

export const LeaderSchema = SchemaFactory.createForClass(Leader);
