import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatronDocument = Patron & Document;

@Schema({ timestamps: true })
export class Patron {
  @Prop({ required: true })
  name: string;

  @Prop()
  role: string;

  @Prop()
  type: string; // e.g., 'PATRON', 'MATRON'

  @Prop()
  avatar: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  bio: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: 99 })
  order: number;
}

export const PatronSchema = SchemaFactory.createForClass(Patron);
