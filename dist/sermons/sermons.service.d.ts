import { Model } from 'mongoose';
import { Sermon, SermonDocument } from './schemas/sermon.schema';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class SermonsService {
    private sermonModel;
    private updatesGateway;
    constructor(sermonModel: Model<SermonDocument>, updatesGateway: UpdatesGateway);
    create(createSermonDto: CreateSermonDto): Promise<Sermon>;
    findAll(): Promise<Sermon[]>;
    findOne(id: string): Promise<Sermon>;
    update(id: string, updateSermonDto: CreateSermonDto): Promise<Sermon>;
    remove(id: string): Promise<Sermon>;
}
