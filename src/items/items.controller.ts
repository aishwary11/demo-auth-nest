import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() item) {
    this.itemsService.create(item);
  }
}
