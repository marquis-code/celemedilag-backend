import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganogramService } from './organogram.service';
import { CreateOrganogramDto } from './dto/create-organogram.dto';
import { UpdateOrganogramDto } from './dto/update-organogram.dto';

@Controller('organogram')
export class OrganogramController {
  constructor(private readonly organogramService: OrganogramService) {}

  @Post()
  create(@Body() createOrganogramDto: CreateOrganogramDto) {
    return this.organogramService.create(createOrganogramDto);
  }

  @Get()
  findAll() {
    return this.organogramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organogramService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganogramDto: UpdateOrganogramDto) {
    return this.organogramService.update(id, updateOrganogramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organogramService.remove(id);
  }
}
