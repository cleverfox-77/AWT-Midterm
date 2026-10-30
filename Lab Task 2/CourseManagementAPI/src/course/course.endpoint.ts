import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CourseRegistry } from './course.registry.js';
import { NewCourseDto } from './dto/new-course.dto.js';
import { CoursePatchDto } from './dto/course-patch.dto.js';
import { courseUploadOptions } from './course-upload.options.js';

@Controller('course')
export class CourseEndpoint {
  constructor(private readonly registry: CourseRegistry) {}

  @Get()
  list() {
    return this.registry.list();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.registry.find(id);
  }

  @Post()
  add(@Body() dto: NewCourseDto) {
    return this.registry.add(dto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() dto: CoursePatchDto) {
    return this.registry.replace(id, dto);
  }

  @Patch(':id')
  amend(@Param('id') id: string, @Body() dto: CoursePatchDto) {
    return this.registry.amend(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registry.remove(id);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file', courseUploadOptions))
  attach(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.registry.attach(id, file);
  }
}
