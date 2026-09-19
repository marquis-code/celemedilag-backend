import { Document as MongooseDocument } from 'mongoose';
export type DocumentDocument = AppDocument & MongooseDocument;
export declare enum DocumentCategory {
    LEGACY_AND_CAPITAL_PROJECTS = "Legacy & Capital Projects",
    MINISTRY_OPERATIONS = "Ministry Operations (Ministry & Welfare Budget)",
    MISSION_OUTREACHES = "Mission Outreaches (Mission, Outreach & Emergency Fund)"
}
export declare class AppDocument {
    title: string;
    category: string;
    pdfUrl: string;
    publicId?: string;
}
export declare const DocumentSchema: import("mongoose").Schema<AppDocument, import("mongoose").Model<AppDocument, any, any, any, any, any, AppDocument>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AppDocument, MongooseDocument<unknown, {}, AppDocument, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AppDocument & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, AppDocument, MongooseDocument<unknown, {}, AppDocument, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppDocument & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, AppDocument, MongooseDocument<unknown, {}, AppDocument, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppDocument & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    pdfUrl?: import("mongoose").SchemaDefinitionProperty<string, AppDocument, MongooseDocument<unknown, {}, AppDocument, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppDocument & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    publicId?: import("mongoose").SchemaDefinitionProperty<string | undefined, AppDocument, MongooseDocument<unknown, {}, AppDocument, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AppDocument & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, AppDocument>;
