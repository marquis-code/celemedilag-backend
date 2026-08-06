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
}

export const AlumnusSchema = SchemaFactory.createForClass(Alumnus);
