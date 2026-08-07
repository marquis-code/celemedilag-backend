import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    private readonly updatesGateway: UpdatesGateway,
  ) {}

  async create(createContactDto: any): Promise<Contact> {
    const createdContact = new this.contactModel(createContactDto);
    const saved = await createdContact.save();
    
    // Notify admin via WebSocket
    this.updatesGateway.broadcastUpdate('contactRequest', { type: 'contactRequest', data: saved });
    
    return saved;
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().sort({ createdAt: -1 }).lean().exec();
  }
}
