import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

export type DocumentDocument = AppDocument & MongooseDocument;

export enum DocumentCategory {
  LEGACY_AND_CAPITAL_PROJECTS = 'Legacy & Capital Projects',
  MINISTRY_OPERATIONS = 'Ministry Operations (Ministry & Welfare Budget)',
  MISSION_OUTREACHES = 'Mission Outreaches (Mission, Outreach & Emergency Fund)',
}

@Schema({ timestamps: true })
export class AppDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: DocumentCategory })
  category: string;

  @Prop({ required: true })
  pdfUrl: string;

  @Prop()
  publicId?: string;
}

export const DocumentSchema = SchemaFactory.createForClass(AppDocument);
