import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: any) {
    const contact = await this.contactService.create(createContactDto);
    return {
      message: 'Message sent successfully',
      data: contact,
    };
  }

  @Get()
  async findAll() {
    const contacts = await this.contactService.findAll();
    return {
      data: contacts,
    };
  }
}
