import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SermonDocument = Sermon & Document;

@Schema({ timestamps: true })
export class Sermon {
  @Prop({ required: true })
  title: string;

  @Prop()
  type: string;

  @Prop()
  preacher: string;

  @Prop()
  date: string;

  @Prop()
  fileUrl: string;

  @Prop()
  videoUrl: string;

  @Prop()
  duration: string;

  @Prop()
  series: string;

  @Prop([String])
  bibleVerses: string[];

  @Prop()
  summary: string;

  @Prop()
  coverImageUrl: string;
}

export const SermonSchema = SchemaFactory.createForClass(Sermon);
