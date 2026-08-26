import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatronsService } from './patrons.service';
import { PatronsController } from './patrons.controller';
import { Patron, PatronSchema } from './schemas/patron.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patron.name, schema: PatronSchema }])],
  controllers: [PatronsController],
  providers: [PatronsService],
})
export class PatronsModule {}
