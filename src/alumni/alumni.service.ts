import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alumnus, AlumnusDocument } from './schemas/alumnus.schema';
import { CreateAlumnusDto } from './dto/create-alumnus.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class AlumniService {
  constructor(
    @InjectModel(Alumnus.name) private alumnusModel: Model<AlumnusDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createAlumnusDto: CreateAlumnusDto): Promise<Alumnus> {
    const newAlumnus = new this.alumnusModel(createAlumnusDto);
    const saved = await newAlumnus.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'alumni', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Alumnus[]> {
    return this.alumnusModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Alumnus> {
    const alumnus = await this.alumnusModel.findById(id).lean().exec();
    if (!alumnus) {
      throw new NotFoundException(`Alumnus #${id} not found`);
    }
    return alumnus;
  }

  async update(id: string, updateAlumnusDto: CreateAlumnusDto): Promise<Alumnus> {
    const alumnus = await this.alumnusModel.findByIdAndUpdate(id, updateAlumnusDto, { new: true }).exec();
    if (!alumnus) throw new NotFoundException(`Alumnus #${id} not found`);
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'alumni', action: 'update', data: alumnus });
    return alumnus;
  }

  async remove(id: string): Promise<Alumnus> {
    const deletedAlumnus = await this.alumnusModel.findByIdAndDelete(id).exec();
    if (!deletedAlumnus) {
      throw new NotFoundException(`Alumnus #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'alumni', action: 'remove', id });
    return deletedAlumnus;
  }
}
