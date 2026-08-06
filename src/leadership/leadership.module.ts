import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadershipController } from './leadership.controller';
import { LeadershipService } from './leadership.service';
import { Leader, LeaderSchema } from './schemas/leader.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leader.name, schema: LeaderSchema }])
  ],
  controllers: [LeadershipController],
  providers: [LeadershipService],
})
export class LeadershipModule {}
