import { Document } from 'mongoose';
export type AlumnusDocument = Alumnus & Document;
export declare class Alumnus {
    name: string;
    graduationYear: string;
    profession: string;
    location: string;
    email: string;
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
}, Alumnus>;
