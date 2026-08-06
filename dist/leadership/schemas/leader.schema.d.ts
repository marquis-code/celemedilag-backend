import { Document } from 'mongoose';
export type LeaderDocument = Leader & Document;
export declare class Leader {
    name: string;
    position: string;
    tenure: string;
    avatar: string;
    bio: string;
    department: string;
    email: string;
    phone: string;
    socialLinks: {
        twitter: string;
        linkedin: string;
        instagram: string;
    };
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
    avatar?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    department?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    socialLinks?: import("mongoose").SchemaDefinitionProperty<{
        twitter: string;
        linkedin: string;
        instagram: string;
    }, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Leader>;
