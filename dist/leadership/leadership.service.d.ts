import { Model } from 'mongoose';
import { Leader, LeaderDocument } from './schemas/leader.schema';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
import { CloudinaryService } from '../upload/cloudinary.service';
export declare class LeadershipService {
    private leaderModel;
    private updatesGateway;
    private cloudinaryService;
    constructor(leaderModel: Model<LeaderDocument>, updatesGateway: UpdatesGateway, cloudinaryService: CloudinaryService);
    create(createLeaderDto: CreateLeaderDto): Promise<Leader>;
    findAll(): Promise<Leader[]>;
    findOne(id: string): Promise<Leader>;
    update(id: string, updateLeaderDto: CreateLeaderDto): Promise<Leader>;
    remove(id: string): Promise<Leader>;
    bulkUpload(csvFile: Express.Multer.File, images: Express.Multer.File[]): Promise<{
        success: number;
        failed: number;
    }>;
}
