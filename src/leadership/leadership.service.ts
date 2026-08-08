import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leader, LeaderDocument } from './schemas/leader.schema';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class LeadershipService {
  constructor(
    @InjectModel(Leader.name) private leaderModel: Model<LeaderDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createLeaderDto: CreateLeaderDto): Promise<Leader> {
    const newLeader = new this.leaderModel(createLeaderDto);
    const saved = await newLeader.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Leader[]> {
    return this.leaderModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<Leader> {
    const leader = await this.leaderModel.findById(id).lean().exec();
    if (!leader) {
      throw new NotFoundException(`Leader #${id} not found`);
    }
    return leader;
  }

  async update(id: string, updateLeaderDto: CreateLeaderDto): Promise<Leader> {
    const leader = await this.leaderModel.findByIdAndUpdate(id, updateLeaderDto, { new: true }).exec();
    if (!leader) throw new NotFoundException(`Leader #${id} not found`);
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'update', data: leader });
    return leader;
  }

  async remove(id: string): Promise<Leader> {
    const deletedLeader = await this.leaderModel.findByIdAndDelete(id).exec();
    if (!deletedLeader) {
      throw new NotFoundException(`Leader #${id} not found`);
    }
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'remove', id });
    return deletedLeader;
  }
}
