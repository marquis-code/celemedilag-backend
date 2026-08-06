import { LeadershipService } from './leadership.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
export declare class LeadershipController {
    private readonly leadershipService;
    constructor(leadershipService: LeadershipService);
    create(createLeaderDto: CreateLeaderDto): Promise<import("./schemas/leader.schema").Leader>;
    findAll(): Promise<import("./schemas/leader.schema").Leader[]>;
    findOne(id: string): Promise<import("./schemas/leader.schema").Leader>;
    remove(id: string): Promise<import("./schemas/leader.schema").Leader>;
}
