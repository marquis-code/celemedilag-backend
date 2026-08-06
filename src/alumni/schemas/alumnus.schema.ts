import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlumnusDocument = Alumnus & Document;

@Schema({ timestamps: true })
export class Alumnus {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  graduationYear: string;

  @Prop({ required: true })
  profession: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  email: string;
}

export const AlumnusSchema = SchemaFactory.createForClass(Alumnus);
