import { OrganogramService } from './organogram.service';
import { CreateOrganogramDto } from './dto/create-organogram.dto';
import { UpdateOrganogramDto } from './dto/update-organogram.dto';
export declare class OrganogramController {
    private readonly organogramService;
    constructor(organogramService: OrganogramService);
    create(createOrganogramDto: CreateOrganogramDto): Promise<import("./schemas/organogram.schema").OrganogramNode>;
    findAll(): Promise<import("./schemas/organogram.schema").OrganogramNode[]>;
    findOne(id: string): Promise<import("./schemas/organogram.schema").OrganogramNode>;
    update(id: string, updateOrganogramDto: UpdateOrganogramDto): Promise<import("./schemas/organogram.schema").OrganogramNode>;
    remove(id: string): Promise<import("./schemas/organogram.schema").OrganogramNode>;
}
