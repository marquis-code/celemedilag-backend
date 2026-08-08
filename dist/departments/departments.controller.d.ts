import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<import("./schemas/department.schema").Department>;
    findAll(): Promise<import("./schemas/department.schema").Department[]>;
    findOne(id: string): Promise<import("./schemas/department.schema").Department>;
    update(id: string, updateDepartmentDto: CreateDepartmentDto): Promise<import("./schemas/department.schema").Department>;
    remove(id: string): Promise<import("./schemas/department.schema").Department>;
}
