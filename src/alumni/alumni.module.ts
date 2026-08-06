import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumniController } from './alumni.controller';
import { AlumniService } from './alumni.service';
import { Alumnus, AlumnusSchema } from './schemas/alumnus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alumnus.name, schema: AlumnusSchema }])
  ],
  controllers: [AlumniController],
  providers: [AlumniService],
})
export class AlumniModule {}
