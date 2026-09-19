import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppDocument, DocumentDocument } from './schemas/document.schema';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(AppDocument.name) private documentModel: Model<DocumentDocument>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto): Promise<AppDocument> {
    const createdDocument = new this.documentModel(createDocumentDto);
    return createdDocument.save();
  }

  async findAll(category?: string): Promise<AppDocument[]> {
    if (category) {
      return this.documentModel.find({ category }).sort({ createdAt: -1 }).exec();
    }
    return this.documentModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<AppDocument> {
    const document = await this.documentModel.findById(id).exec();
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  async remove(id: string): Promise<AppDocument> {
    const deletedDocument = await this.documentModel.findByIdAndDelete(id).exec();
    if (!deletedDocument) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return deletedDocument;
  }
}
