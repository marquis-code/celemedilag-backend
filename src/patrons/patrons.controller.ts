import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatronsService } from './patrons.service';
import { CreatePatronDto } from './dto/create-patron.dto';

@Controller('patrons')
export class PatronsController {
  constructor(private readonly patronsService: PatronsService) {}

  @Post()
  create(@Body() createPatronDto: CreatePatronDto) {
    return this.patronsService.create(createPatronDto);
  }

  @Get()
  findAll() {
    return this.patronsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patronsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatronDto: Partial<CreatePatronDto>) {
    return this.patronsService.update(id, updatePatronDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patronsService.remove(id);
  }
}
