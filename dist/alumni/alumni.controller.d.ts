import { AlumniService } from './alumni.service';
import { CreateAlumnusDto } from './dto/create-alumnus.dto';
export declare class AlumniController {
    private readonly alumniService;
    constructor(alumniService: AlumniService);
    create(createAlumnusDto: CreateAlumnusDto): Promise<import("./schemas/alumnus.schema").Alumnus>;
    findAll(): Promise<import("./schemas/alumnus.schema").Alumnus[]>;
    findOne(id: string): Promise<import("./schemas/alumnus.schema").Alumnus>;
    update(id: string, updateAlumnusDto: CreateAlumnusDto): Promise<import("./schemas/alumnus.schema").Alumnus>;
    remove(id: string): Promise<import("./schemas/alumnus.schema").Alumnus>;
}
