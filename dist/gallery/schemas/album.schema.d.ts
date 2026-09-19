import { Document } from 'mongoose';
export type AlbumDocument = Album & Document;
export declare class Album {
    albumName: string;
    description: string;
    date: Date;
    coverImageUrl: string;
    photos: {
        url: string;
        caption: string;
        uploadedAt: Date;
    }[];
    tags: string[];
}
export declare const AlbumSchema: import("mongoose").Schema<Album, import("mongoose").Model<Album, any, any, any, any, any, Album>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Album, Document<unknown, {}, Album, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    albumName?: import("mongoose").SchemaDefinitionProperty<string, Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    coverImageUrl?: import("mongoose").SchemaDefinitionProperty<string, Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    photos?: import("mongoose").SchemaDefinitionProperty<{
        url: string;
        caption: string;
        uploadedAt: Date;
    }[], Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Album>;
