import { Document } from 'mongoose';
export type LeaderDocument = Leader & Document;
export declare class Leader {
    name: string;
    position: string;
    tenure: string;
    imageUrl?: string;
}
export declare const LeaderSchema: import("mongoose").Schema<Leader, import("mongoose").Model<Leader, any, any, any, any, any, Leader>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Leader, Document<unknown, {}, Leader, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    tenure?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    imageUrl?: import("mongoose").SchemaDefinitionProperty<string | undefined, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Leader>;
