import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';

import { Event, EventSchema } from '../events/schemas/event.schema';
import { Sermon, SermonSchema } from '../sermons/schemas/sermon.schema';
import { News, NewsSchema } from '../news/schemas/news.schema';
import { Alumnus, AlumnusSchema } from '../alumni/schemas/alumnus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: Sermon.name, schema: SermonSchema },
      { name: News.name, schema: NewsSchema },
      { name: Alumnus.name, schema: AlumnusSchema },
    ]),
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
