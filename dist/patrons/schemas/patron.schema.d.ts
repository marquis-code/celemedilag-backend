import { Document } from 'mongoose';
export type PatronDocument = Patron & Document;
export declare class Patron {
    name: string;
    role: string;
    type: string;
    avatar: string;
    email: string;
    phone: string;
    bio: string;
    isActive: boolean;
    order: number;
    socialLinks: {
        twitter: string;
        linkedin: string;
        instagram: string;
        facebook: string;
        tiktok: string;
        snapchat: string;
    };
}
export declare const PatronSchema: import("mongoose").Schema<Patron, import("mongoose").Model<Patron, any, any, any, any, any, Patron>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patron, Document<unknown, {}, Patron, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    role?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    avatar?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
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
        facebook: string;
        tiktok: string;
        snapchat: string;
    }, Patron, Document<unknown, {}, Patron, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Patron & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Patron>;
