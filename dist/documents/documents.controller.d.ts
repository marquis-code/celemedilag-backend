import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto): Promise<import("./schemas/document.schema").AppDocument>;
    findAll(category?: string): Promise<import("./schemas/document.schema").AppDocument[]>;
    findOne(id: string): Promise<import("./schemas/document.schema").AppDocument>;
    remove(id: string): Promise<import("./schemas/document.schema").AppDocument>;
}
