import { Model } from 'mongoose';
import { AppDocument, DocumentDocument } from './schemas/document.schema';
import { CreateDocumentDto } from './dto/create-document.dto';
export declare class DocumentsService {
    private documentModel;
    constructor(documentModel: Model<DocumentDocument>);
    create(createDocumentDto: CreateDocumentDto): Promise<AppDocument>;
    findAll(category?: string): Promise<AppDocument[]>;
    findOne(id: string): Promise<AppDocument>;
    remove(id: string): Promise<AppDocument>;
}
