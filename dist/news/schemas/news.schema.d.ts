import { Document } from 'mongoose';
export type NewsDocument = News & Document;
export declare class News {
    title: string;
    content: string;
    summary: string;
    category: string;
    author: string;
    tags: string[];
    coverImageUrl: string;
    galleryUrls: string[];
    isPublished: boolean;
    publishedAt: Date;
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
    summary?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
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
    tags?: import("mongoose").SchemaDefinitionProperty<string[], News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    coverImageUrl?: import("mongoose").SchemaDefinitionProperty<string, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    galleryUrls?: import("mongoose").SchemaDefinitionProperty<string[], News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isPublished?: import("mongoose").SchemaDefinitionProperty<boolean, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    publishedAt?: import("mongoose").SchemaDefinitionProperty<Date, News, Document<unknown, {}, News, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, News>;
