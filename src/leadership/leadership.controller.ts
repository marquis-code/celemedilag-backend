import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { LeadershipService } from './leadership.service';
import { CreateLeaderDto } from './dto/create-leader.dto';

@Controller('leadership')
export class LeadershipController {
  constructor(private readonly leadershipService: LeadershipService) {}

  @Post('bulk-upload')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'csv', maxCount: 1 },
    { name: 'images', maxCount: 50 }
  ]))
  bulkUpload(@UploadedFiles() files: { csv?: Express.Multer.File[], images?: Express.Multer.File[] }) {
    if (!files.csv || files.csv.length === 0) {
      return { success: false, message: 'No CSV file provided' };
    }
    return this.leadershipService.bulkUpload(files.csv[0], files.images || []);
  }

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaderDto: CreateLeaderDto) {
    return this.leadershipService.update(id, updateLeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadershipService.remove(id);
  }
}
