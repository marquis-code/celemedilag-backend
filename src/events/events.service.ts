import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createEventDto: any): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
    const saved = await createdEvent.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().sort({ date: 1 }).lean().exec();
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id).lean().exec();
    if (!event) throw new NotFoundException('Event not found');
    return event;
  }

  async update(id: string, updateEventDto: any): Promise<Event> {
    const event = await this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
    if (!event) throw new NotFoundException('Event not found');
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'update', data: event });
    return event;
  }

  async remove(id: string): Promise<Event> {
    const event = await this.eventModel.findByIdAndDelete(id).exec();
    if (!event) throw new NotFoundException('Event not found');
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'remove', id });
    return event;
  }
}
