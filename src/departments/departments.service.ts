import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department, DepartmentDocument } from './schemas/department.schema';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const newDepartment = new this.departmentModel(createDepartmentDto);
    const saved = await newDepartment.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Department> {
    const department = await this.departmentModel.findById(id).exec();
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    return department;
  }

  async remove(id: string): Promise<Department> {
    const deletedDepartment = await this.departmentModel.findByIdAndDelete(id).exec();
    if (!deletedDepartment) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'remove', id });
    return deletedDepartment;
  }
}
