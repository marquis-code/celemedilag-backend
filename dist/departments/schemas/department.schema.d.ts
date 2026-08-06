import { Document } from 'mongoose';
export type DepartmentDocument = Department & Document;
export declare class Department {
    name: string;
    description: string;
    hodName: string;
    hodPhotoUrl: string;
    meetingDays: string;
    bannerImageUrl: string;
    membersCount: number;
    responsibilities: string[];
    contactEmail: string;
    contactPhone: string;
}
export declare const DepartmentSchema: import("mongoose").Schema<Department, import("mongoose").Model<Department, any, any, any, any, any, Department>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Department, Document<unknown, {}, Department, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    hodName?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    hodPhotoUrl?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    meetingDays?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    bannerImageUrl?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    membersCount?: import("mongoose").SchemaDefinitionProperty<number, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    responsibilities?: import("mongoose").SchemaDefinitionProperty<string[], Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    contactEmail?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    contactPhone?: import("mongoose").SchemaDefinitionProperty<string, Department, Document<unknown, {}, Department, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Department & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Department>;
