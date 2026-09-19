import { Model } from 'mongoose';
import { Alumnus, AlumnusDocument } from './schemas/alumnus.schema';
import { CreateAlumnusDto } from './dto/create-alumnus.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class AlumniService {
    private alumnusModel;
    private updatesGateway;
    constructor(alumnusModel: Model<AlumnusDocument>, updatesGateway: UpdatesGateway);
    create(createAlumnusDto: CreateAlumnusDto): Promise<Alumnus>;
    findAll(): Promise<Alumnus[]>;
    findOne(id: string): Promise<Alumnus>;
    update(id: string, updateAlumnusDto: CreateAlumnusDto): Promise<Alumnus>;
    remove(id: string): Promise<Alumnus>;
}
