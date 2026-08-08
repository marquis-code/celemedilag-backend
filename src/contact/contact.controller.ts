import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: any) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  async findAll() {
    return this.contactService.findAll();
  }
}
