import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganogramService } from './organogram.service';
import { OrganogramController } from './organogram.controller';
import { OrganogramNode, OrganogramNodeSchema } from './schemas/organogram.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OrganogramNode.name, schema: OrganogramNodeSchema }]),
    AuthModule,
  ],
  controllers: [OrganogramController],
  providers: [OrganogramService],
  exports: [OrganogramService],
})
export class OrganogramModule {}
