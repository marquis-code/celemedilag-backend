import { Document, Types } from 'mongoose';
export type LeaderDocument = Leader & Document;
export declare class Leader {
    name: string;
    position: string;
    organogramNodeId: Types.ObjectId;
    tenure: string;
    isPastExco: boolean;
    session: string;
    avatar: string;
    bio: string;
    department: string;
    email: string;
    phone: string;
    order: number;
    courseOfStudy: string;
    socialLinks: {
        twitter: string;
        linkedin: string;
        instagram: string;
        facebook: string;
        tiktok: string;
        snapchat: string;
    };
}
export declare const LeaderSchema: import("mongoose").Schema<Leader, import("mongoose").Model<Leader, any, any, any, any, any, Leader>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Leader, Document<unknown, {}, Leader, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    organogramNodeId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    tenure?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isPastExco?: import("mongoose").SchemaDefinitionProperty<boolean, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    session?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    avatar?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    department?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    courseOfStudy?: import("mongoose").SchemaDefinitionProperty<string, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    socialLinks?: import("mongoose").SchemaDefinitionProperty<{
        twitter: string;
        linkedin: string;
        instagram: string;
        facebook: string;
        tiktok: string;
        snapchat: string;
    }, Leader, Document<unknown, {}, Leader, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Leader & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Leader>;
