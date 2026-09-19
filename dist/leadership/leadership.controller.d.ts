import { LeadershipService } from './leadership.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
export declare class LeadershipController {
    private readonly leadershipService;
    constructor(leadershipService: LeadershipService);
    bulkUpload(files: {
        csv?: Express.Multer.File[];
        images?: Express.Multer.File[];
    }): Promise<{
        success: number;
        failed: number;
    }> | {
        success: boolean;
        message: string;
    };
    create(createLeaderDto: CreateLeaderDto): Promise<import("./schemas/leader.schema").Leader>;
    findAll(): Promise<import("./schemas/leader.schema").Leader[]>;
    findOne(id: string): Promise<import("./schemas/leader.schema").Leader>;
    update(id: string, updateLeaderDto: CreateLeaderDto): Promise<import("./schemas/leader.schema").Leader>;
    remove(id: string): Promise<import("./schemas/leader.schema").Leader>;
}
