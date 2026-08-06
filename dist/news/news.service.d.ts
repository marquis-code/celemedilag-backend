import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class NewsService {
    private newsModel;
    private updatesGateway;
    constructor(newsModel: Model<NewsDocument>, updatesGateway: UpdatesGateway);
    create(createNewsDto: any): Promise<News>;
    findAll(): Promise<News[]>;
    findOne(id: string): Promise<News>;
    update(id: string, updateNewsDto: any): Promise<News>;
    remove(id: string): Promise<News>;
}
