import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patron, PatronDocument } from './schemas/patron.schema';
import { CreatePatronDto } from './dto/create-patron.dto';

@Injectable()
export class PatronsService {
  constructor(
    @InjectModel(Patron.name) private patronModel: Model<PatronDocument>,
  ) {}

  async create(createPatronDto: CreatePatronDto): Promise<Patron> {
    const createdPatron = new this.patronModel(createPatronDto);
    return createdPatron.save();
  }

  async findAll(): Promise<Patron[]> {
    return this.patronModel.find().exec();
  }

  async findOne(id: string): Promise<Patron> {
    const patron = await this.patronModel.findById(id).exec();
    if (!patron) {
      throw new NotFoundException(`Patron with ID ${id} not found`);
    }
    return patron;
  }

  async update(id: string, updatePatronDto: Partial<CreatePatronDto>): Promise<Patron> {
    const updatedPatron = await this.patronModel
      .findByIdAndUpdate(id, updatePatronDto, { new: true })
      .exec();
    
    if (!updatedPatron) {
      throw new NotFoundException(`Patron with ID ${id} not found`);
    }
    return updatedPatron;
  }

  async remove(id: string): Promise<Patron> {
    const deletedPatron = await this.patronModel.findByIdAndDelete(id).exec();
    if (!deletedPatron) {
      throw new NotFoundException(`Patron with ID ${id} not found`);
    }
    return deletedPatron;
  }
}
