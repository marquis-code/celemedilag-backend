import { Types } from 'mongoose';
export declare class CreateOrganogramDto {
    title: string;
    order?: number;
    parentId?: string | Types.ObjectId;
    isGroup?: boolean;
}
