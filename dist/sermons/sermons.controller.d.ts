import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
export declare class SermonsController {
    private readonly sermonsService;
    constructor(sermonsService: SermonsService);
    create(createSermonDto: CreateSermonDto): Promise<import("./schemas/sermon.schema").Sermon>;
    findAll(): Promise<import("./schemas/sermon.schema").Sermon[]>;
    findOne(id: string): Promise<import("./schemas/sermon.schema").Sermon>;
    remove(id: string): Promise<import("./schemas/sermon.schema").Sermon>;
}
