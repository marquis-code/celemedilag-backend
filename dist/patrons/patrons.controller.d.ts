import { PatronsService } from './patrons.service';
import { CreatePatronDto } from './dto/create-patron.dto';
export declare class PatronsController {
    private readonly patronsService;
    constructor(patronsService: PatronsService);
    create(createPatronDto: CreatePatronDto): Promise<import("./schemas/patron.schema").Patron>;
    findAll(): Promise<import("./schemas/patron.schema").Patron[]>;
    findOne(id: string): Promise<import("./schemas/patron.schema").Patron>;
    update(id: string, updatePatronDto: Partial<CreatePatronDto>): Promise<import("./schemas/patron.schema").Patron>;
    remove(id: string): Promise<import("./schemas/patron.schema").Patron>;
}
