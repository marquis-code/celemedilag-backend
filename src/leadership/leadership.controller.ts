import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LeadershipService } from './leadership.service';
import { CreateLeaderDto } from './dto/create-leader.dto';

@Controller('leadership')
export class LeadershipController {
  constructor(private readonly leadershipService: LeadershipService) {}

  @Post()
  create(@Body() createLeaderDto: CreateLeaderDto) {
    return this.leadershipService.create(createLeaderDto);
  }

  @Get()
  findAll() {
    return this.leadershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadershipService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadershipService.remove(id);
  }
}
