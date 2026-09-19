import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrganogramNodeDocument = OrganogramNode & Document;

@Schema({ timestamps: true })
export class OrganogramNode {
  @Prop({ required: true })
  title: string;

  @Prop({ default: 0 })
  order: number; // To determine order in the 17 roles list and left-to-right in the tree

  @Prop({ type: Types.ObjectId, ref: 'OrganogramNode', default: null })
  parentId: Types.ObjectId; // null for the root (e.g., Past Coordinators)

  @Prop({ default: false })
  isGroup: boolean; // true if this is a visual group node like "Secretaries: General Secretary / Assistant" or the big box
}

export const OrganogramNodeSchema = SchemaFactory.createForClass(OrganogramNode);
