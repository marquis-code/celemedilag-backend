import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema({ timestamps: true })
export class News {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop()
  summary: string;

  @Prop()
  category: string;

  @Prop()
  author: string;

  @Prop([String])
  tags: string[];

  @Prop()
  coverImageUrl: string;

  @Prop([String])
  galleryUrls: string[];

  @Prop({ default: true })
  isPublished: boolean;

  @Prop()
  publishedAt: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
