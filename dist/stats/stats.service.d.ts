import { Model } from 'mongoose';
import { EventDocument } from '../events/schemas/event.schema';
import { SermonDocument } from '../sermons/schemas/sermon.schema';
import { NewsDocument } from '../news/schemas/news.schema';
import { AlumnusDocument } from '../alumni/schemas/alumnus.schema';
export declare class StatsService {
    private eventModel;
    private sermonModel;
    private newsModel;
    private alumnusModel;
    constructor(eventModel: Model<EventDocument>, sermonModel: Model<SermonDocument>, newsModel: Model<NewsDocument>, alumnusModel: Model<AlumnusDocument>);
    getDashboardStats(): Promise<{
        events: number;
        sermons: number;
        news: number;
        alumni: number;
    }>;
}
