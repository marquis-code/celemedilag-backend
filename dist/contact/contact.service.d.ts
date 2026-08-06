import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class ContactService {
    private contactModel;
    private readonly updatesGateway;
    constructor(contactModel: Model<ContactDocument>, updatesGateway: UpdatesGateway);
    create(createContactDto: any): Promise<Contact>;
    findAll(): Promise<Contact[]>;
}
