import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: any): Promise<import("./schemas/event.schema").Event>;
    findAll(): Promise<import("./schemas/event.schema").Event[]>;
    findOne(id: string): Promise<import("./schemas/event.schema").Event>;
    update(id: string, updateEventDto: any): Promise<import("./schemas/event.schema").Event>;
    remove(id: string): Promise<import("./schemas/event.schema").Event>;
}
