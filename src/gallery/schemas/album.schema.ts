import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema({ timestamps: true })
export class Album {
  @Prop({ required: true })
  albumName: string;

  @Prop({ type: [String], required: true })
  photos: string[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
