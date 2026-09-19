import { Document, Types } from 'mongoose';
export type OrganogramNodeDocument = OrganogramNode & Document;
export declare class OrganogramNode {
    title: string;
    order: number;
    parentId: Types.ObjectId;
    isGroup: boolean;
}
export declare const OrganogramNodeSchema: import("mongoose").Schema<OrganogramNode, import("mongoose").Model<OrganogramNode, any, any, any, any, any, OrganogramNode>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrganogramNode, Document<unknown, {}, OrganogramNode, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<OrganogramNode & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, OrganogramNode, Document<unknown, {}, OrganogramNode, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<OrganogramNode & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, OrganogramNode, Document<unknown, {}, OrganogramNode, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<OrganogramNode & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    parentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, OrganogramNode, Document<unknown, {}, OrganogramNode, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<OrganogramNode & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isGroup?: import("mongoose").SchemaDefinitionProperty<boolean, OrganogramNode, Document<unknown, {}, OrganogramNode, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<OrganogramNode & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, OrganogramNode>;
