import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseDirectory } from './course.directory.js';

type CourseDraft = {
  name: string;
  code: string;
};

@Controller('course')
export class CourseEndpoint {
  constructor(private readonly directory: CourseDirectory) {}

  @Get()
  list() {
    return this.directory.all();
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this.directory.byId(id);
  }

  @Post()
  add(@Body() draft: CourseDraft) {
    return this.directory.register(draft.name, draft.code);
  }
}
