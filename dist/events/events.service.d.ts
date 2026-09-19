import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class EventsService {
    private eventModel;
    private updatesGateway;
    constructor(eventModel: Model<EventDocument>, updatesGateway: UpdatesGateway);
    create(createEventDto: any): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: string): Promise<Event>;
    update(id: string, updateEventDto: any): Promise<Event>;
    remove(id: string): Promise<Event>;
}
