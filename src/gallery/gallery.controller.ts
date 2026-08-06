import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.galleryService.create(createAlbumDto);
  }

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galleryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
