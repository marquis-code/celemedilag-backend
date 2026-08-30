import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlumnusDocument = Alumnus & Document;

@Schema({ timestamps: true })
export class Alumnus {
  @Prop({ required: true })
  name: string;

  @Prop()
  graduationYear: string;

  @Prop()
  profession: string;

  @Prop()
  location: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  linkedInProfile: string;

  @Prop()
  bio: string;

  @Prop()
  photoUrl: string;

  @Prop()
  currentCompany: string;

  @Prop({ default: false })
  wasExco: boolean;

  @Prop()
  excoRole: string;

  @Prop({ type: { twitter: String, linkedin: String, instagram: String, facebook: String, tiktok: String, snapchat: String } })
  socialLinks: { twitter: string; linkedin: string; instagram: string; facebook: string; tiktok: string; snapchat: string };
}

export const AlumnusSchema = SchemaFactory.createForClass(Alumnus);
