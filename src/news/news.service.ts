import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private newsModel: Model<NewsDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async create(createNewsDto: any): Promise<News> {
    const createdNews = new this.newsModel(createNewsDto);
    const saved = await createdNews.save();
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'create', data: saved });
    return saved;
  }

  async findAll(): Promise<News[]> {
    return this.newsModel.find().sort({ createdAt: -1 }).lean().exec();
  }

  async findOne(id: string): Promise<News> {
    const news = await this.newsModel.findById(id).lean().exec();
    if (!news) throw new NotFoundException('News article not found');
    return news;
  }

  async update(id: string, updateNewsDto: any): Promise<News> {
    const news = await this.newsModel.findByIdAndUpdate(id, updateNewsDto, { new: true }).exec();
    if (!news) throw new NotFoundException('News article not found');
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'update', data: news });
    return news;
  }

  async remove(id: string): Promise<News> {
    const news = await this.newsModel.findByIdAndDelete(id).exec();
    if (!news) throw new NotFoundException('News article not found');
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'remove', id });
    return news;
  }
}
