import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrganogramNode, OrganogramNodeDocument } from './schemas/organogram.schema';
import { CreateOrganogramDto } from './dto/create-organogram.dto';
import { UpdateOrganogramDto } from './dto/update-organogram.dto';

@Injectable()
export class OrganogramService {
  constructor(
    @InjectModel(OrganogramNode.name) private organogramModel: Model<OrganogramNodeDocument>,
  ) {}

  async create(createOrganogramDto: CreateOrganogramDto): Promise<OrganogramNode> {
    const createdNode = new this.organogramModel(createOrganogramDto);
    return createdNode.save();
  }

  async findAll(): Promise<OrganogramNode[]> {
    return this.organogramModel.find().sort({ order: 1 }).exec();
  }

  async findOne(id: string): Promise<OrganogramNode> {
    const node = await this.organogramModel.findById(id).exec();
    if (!node) {
      throw new NotFoundException(`OrganogramNode with id ${id} not found`);
    }
    return node;
  }

  async update(id: string, updateOrganogramDto: UpdateOrganogramDto): Promise<OrganogramNode> {
    const updatedNode = await this.organogramModel
      .findByIdAndUpdate(id, updateOrganogramDto, { new: true })
      .exec();
    
    if (!updatedNode) {
      throw new NotFoundException(`OrganogramNode with id ${id} not found`);
    }
    return updatedNode;
  }

  async remove(id: string): Promise<OrganogramNode> {
    const deletedNode = await this.organogramModel.findByIdAndDelete(id).exec();
    if (!deletedNode) {
      throw new NotFoundException(`OrganogramNode with id ${id} not found`);
    }
    return deletedNode;
  }

  // Clear all data for re-seeding
  async clearAll(): Promise<void> {
    await this.organogramModel.deleteMany({}).exec();
  }
}
