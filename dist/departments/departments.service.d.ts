import { Model } from 'mongoose';
import { Department, DepartmentDocument } from './schemas/department.schema';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class DepartmentsService {
    private departmentModel;
    private updatesGateway;
    constructor(departmentModel: Model<DepartmentDocument>, updatesGateway: UpdatesGateway);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: string): Promise<Department>;
    update(id: string, updateDepartmentDto: CreateDepartmentDto): Promise<Department>;
    remove(id: string): Promise<Department>;
}
