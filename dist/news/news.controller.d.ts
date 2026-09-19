import { NewsService } from './news.service';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(createNewsDto: any): Promise<import("./schemas/news.schema").News>;
    findAll(): Promise<import("./schemas/news.schema").News[]>;
    findOne(id: string): Promise<import("./schemas/news.schema").News>;
    update(id: string, updateNewsDto: any): Promise<import("./schemas/news.schema").News>;
    remove(id: string): Promise<import("./schemas/news.schema").News>;
}
