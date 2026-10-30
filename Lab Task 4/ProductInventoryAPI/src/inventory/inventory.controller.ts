import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { InventoryService } from './inventory.service.js';
import { NewItemDto } from './dto/new-item.dto.js';
import { ReplaceItemDto } from './dto/replace-item.dto.js';
import { AmendItemDto } from './dto/amend-item.dto.js';

@Controller('products')
export class InventoryEndpoint {
  constructor(private readonly inventory: InventoryService) {}

  @Post()
  create(@Body() dto: NewItemDto) {
    return this.inventory.create(dto);
  }

  @Get()
  list() {
    return this.inventory.findAll();
  }

  @Get('search')
  search(@Query('keyword') keyword: string) {
    return this.inventory.search(keyword);
  }

  @Get('category/:cat')
  byCategory(@Param('cat') cat: string) {
    return this.inventory.findByCategory(cat);
  }

  @Get(':id')
  detail(@Param('id', ParseIntPipe) id: number) {
    return this.inventory.findOne(id);
  }

  @Patch(':id/toggle')
  toggle(@Param('id', ParseIntPipe) id: number) {
    return this.inventory.toggleActive(id);
  }

  @Patch(':id')
  amend(@Param('id', ParseIntPipe) id: number, @Body() dto: AmendItemDto) {
    return this.inventory.update(id, dto);
  }

  @Put(':id')
  replace(@Param('id', ParseIntPipe) id: number, @Body() dto: ReplaceItemDto) {
    return this.inventory.replace(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inventory.remove(id);
  }
}
