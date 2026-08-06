import { Document } from 'mongoose';
export type NewsDocument = News & Document;
export declare class News {
    title: string;
    content: string;
    category: string;
    author: string;
    imageUrl: string;
}
export declare const NewsSchema: import("mongoose").Schema<News, import("mongoose").Model<News, any, any, any, any, any, News>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, News, Document<unknown, {}, News, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<News & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    imageUrl?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, News>;
