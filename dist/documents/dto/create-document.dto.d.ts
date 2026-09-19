import { DocumentCategory } from '../schemas/document.schema';
export declare class CreateDocumentDto {
    title: string;
    category: DocumentCategory;
    pdfUrl: string;
    publicId?: string;
}
