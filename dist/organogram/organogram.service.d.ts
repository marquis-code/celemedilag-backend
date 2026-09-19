import { Model } from 'mongoose';
import { OrganogramNode, OrganogramNodeDocument } from './schemas/organogram.schema';
import { CreateOrganogramDto } from './dto/create-organogram.dto';
import { UpdateOrganogramDto } from './dto/update-organogram.dto';
export declare class OrganogramService {
    private organogramModel;
    constructor(organogramModel: Model<OrganogramNodeDocument>);
    create(createOrganogramDto: CreateOrganogramDto): Promise<OrganogramNode>;
    findAll(): Promise<OrganogramNode[]>;
    findOne(id: string): Promise<OrganogramNode>;
    update(id: string, updateOrganogramDto: UpdateOrganogramDto): Promise<OrganogramNode>;
    remove(id: string): Promise<OrganogramNode>;
    clearAll(): Promise<void>;
}
