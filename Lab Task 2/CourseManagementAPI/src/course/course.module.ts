import { Module } from '@nestjs/common';
import { CourseEndpoint } from './course.endpoint.js';
import { CourseRegistry } from './course.registry.js';

@Module({
  controllers: [CourseEndpoint],
  providers: [CourseRegistry],
})
export class CourseModule {}
