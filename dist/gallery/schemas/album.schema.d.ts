import { Document } from 'mongoose';
export type AlbumDocument = Album & Document;
export declare class Album {
    albumName: string;
    photos: string[];
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
    photos?: import("mongoose").SchemaDefinitionProperty<string[], Album, Document<unknown, {}, Album, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Album & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Album>;
