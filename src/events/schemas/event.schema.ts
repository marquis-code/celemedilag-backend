import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  time: string;

  @Prop()
  location: string;

  @Prop()
  mapUrl: string;

  @Prop()
  bannerImageUrl: string;

  @Prop({ type: [{ name: String, role: String, photoUrl: String, bio: String }] })
  speakers: { name: string; role: string; photoUrl: string; bio: string }[];

  @Prop([String])
  tags: string[];

  @Prop()
  registrationUrl: string;

  @Prop({ default: true })
  isPublished: boolean;

  @Prop()
  status: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
