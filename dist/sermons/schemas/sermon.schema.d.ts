import { Document } from 'mongoose';
export type SermonDocument = Sermon & Document;
export declare class Sermon {
    title: string;
    type: string;
    preacher: string;
    date: string;
    fileUrl: string;
}
export declare const SermonSchema: import("mongoose").Schema<Sermon, import("mongoose").Model<Sermon, any, any, any, any, any, Sermon>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sermon, Document<unknown, {}, Sermon, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Sermon, Document<unknown, {}, Sermon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Sermon, Document<unknown, {}, Sermon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    preacher?: import("mongoose").SchemaDefinitionProperty<string, Sermon, Document<unknown, {}, Sermon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<string, Sermon, Document<unknown, {}, Sermon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    fileUrl?: import("mongoose").SchemaDefinitionProperty<string, Sermon, Document<unknown, {}, Sermon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sermon & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Sermon>;
