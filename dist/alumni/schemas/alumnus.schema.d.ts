import { Document } from 'mongoose';
export type AlumnusDocument = Alumnus & Document;
export declare class Alumnus {
    name: string;
    graduationYear: string;
    profession: string;
    location: string;
    email: string;
    phone: string;
    linkedInProfile: string;
    bio: string;
    photoUrl: string;
    currentCompany: string;
    wasExco: boolean;
    excoRole: string;
    socialLinks: {
        twitter: string;
        linkedin: string;
        instagram: string;
        facebook: string;
        tiktok: string;
        snapchat: string;
    };
}
export declare const AlumnusSchema: import("mongoose").Schema<Alumnus, import("mongoose").Model<Alumnus, any, any, any, any, any, Alumnus>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Alumnus, Document<unknown, {}, Alumnus, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    graduationYear?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    profession?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    linkedInProfile?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    photoUrl?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    currentCompany?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    wasExco?: import("mongoose").SchemaDefinitionProperty<boolean, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    excoRole?: import("mongoose").SchemaDefinitionProperty<string, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
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
    }, Alumnus, Document<unknown, {}, Alumnus, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alumnus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Alumnus>;
