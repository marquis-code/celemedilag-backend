import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact, ContactSchema } from './contact.schema';
import { WebsocketsModule } from '../websockets/websockets.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    WebsocketsModule,
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
