import { Module } from '@nestjs/common';
import { CourseEndpoint } from './course.endpoint.js';
import { CourseDirectory } from './course.directory.js';

@Module({
  controllers: [CourseEndpoint],
  providers: [CourseDirectory],
  exports: [CourseDirectory],
})
export class CourseModule {}
