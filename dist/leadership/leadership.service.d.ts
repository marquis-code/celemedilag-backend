import { Model } from 'mongoose';
import { Leader, LeaderDocument } from './schemas/leader.schema';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class LeadershipService {
    private leaderModel;
    private updatesGateway;
    constructor(leaderModel: Model<LeaderDocument>, updatesGateway: UpdatesGateway);
    create(createLeaderDto: CreateLeaderDto): Promise<Leader>;
    findAll(): Promise<Leader[]>;
    findOne(id: string): Promise<Leader>;
    update(id: string, updateLeaderDto: CreateLeaderDto): Promise<Leader>;
    remove(id: string): Promise<Leader>;
}
