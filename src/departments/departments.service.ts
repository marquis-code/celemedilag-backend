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
    return this.departmentModel.find().sort({ displayOrder: 1, createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Department> {
    const department = await this.departmentModel.findById(id).lean().exec();
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    return department;
  }

  async update(id: string, updateDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department = await this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, { new: true }).exec();
    if (!department) throw new NotFoundException(`Department #${id} not found`);
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'update', data: department });
    return department;
  }

  async reorder(updates: { id: string, category: string, displayOrder: number }[]): Promise<any> {
    const bulkOps = updates.map(update => ({
      updateOne: {
        filter: { _id: update.id },
        update: { $set: { category: update.category, displayOrder: update.displayOrder } }
      }
    }));
    if (bulkOps.length > 0) {
      await this.departmentModel.bulkWrite(bulkOps);
      this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'reorder' });
    }
    return { success: true };
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
