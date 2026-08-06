import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Event, EventDocument } from '../events/schemas/event.schema';
import { Sermon, SermonDocument } from '../sermons/schemas/sermon.schema';
import { News, NewsDocument } from '../news/schemas/news.schema';
import { Alumnus, AlumnusDocument } from '../alumni/schemas/alumnus.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    @InjectModel(Sermon.name) private sermonModel: Model<SermonDocument>,
    @InjectModel(News.name) private newsModel: Model<NewsDocument>,
    @InjectModel(Alumnus.name) private alumnusModel: Model<AlumnusDocument>,
  ) {}

  async getDashboardStats() {
    const upcomingEventsCount = await this.eventModel.countDocuments({
      date: { $gte: new Date().toISOString() } // simplified check, or just count all if date filtering is complex
    }).catch(() => this.eventModel.countDocuments()); // fallback to all events
    
    // just counting all documents for the stats
    const events = await this.eventModel.countDocuments();
    const sermons = await this.sermonModel.countDocuments();
    const news = await this.newsModel.countDocuments();
    const alumni = await this.alumnusModel.countDocuments();

    return {
      events,
      sermons,
      news,
      alumni,
    };
  }
}
