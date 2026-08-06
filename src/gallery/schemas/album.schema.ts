import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema({ timestamps: true })
export class Album {
  @Prop({ required: true })
  albumName: string;

  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  coverImageUrl: string;

  @Prop({ type: [{ url: String, caption: String, uploadedAt: Date }] })
  photos: { url: string; caption: string; uploadedAt: Date }[];

  @Prop([String])
  tags: string[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
