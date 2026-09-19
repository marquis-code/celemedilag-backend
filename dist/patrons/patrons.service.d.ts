import { Model } from 'mongoose';
import { Patron, PatronDocument } from './schemas/patron.schema';
import { CreatePatronDto } from './dto/create-patron.dto';
export declare class PatronsService {
    private patronModel;
    constructor(patronModel: Model<PatronDocument>);
    create(createPatronDto: CreatePatronDto): Promise<Patron>;
    findAll(): Promise<Patron[]>;
    findOne(id: string): Promise<Patron>;
    update(id: string, updatePatronDto: Partial<CreatePatronDto>): Promise<Patron>;
    remove(id: string): Promise<Patron>;
}
