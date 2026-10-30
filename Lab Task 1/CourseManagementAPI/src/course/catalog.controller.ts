import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CourseCatalog } from './course.catalog.js';

@Controller('course')
export class CatalogController {
  constructor(private readonly catalog: CourseCatalog) {}

  @Get()
  list() {
    return this.catalog.run('list');
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.catalog.run('find', id);
  }

  @Post()
  add() {
    return this.catalog.run('add');
  }

  @Put(':id')
  replace(@Param('id') id: string) {
    return this.catalog.run('replace', id);
  }

  @Patch(':id')
  amend(@Param('id') id: string) {
    return this.catalog.run('amend', id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalog.run('remove', id);
  }
}
