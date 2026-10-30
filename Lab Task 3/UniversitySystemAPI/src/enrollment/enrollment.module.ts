import { Module } from '@nestjs/common';
import { CourseModule } from '../course/course.module.js';
import { EnrollmentEndpoint } from './enrollment.endpoint.js';
import { EnrollmentDesk } from './enrollment.desk.js';

@Module({
  imports: [CourseModule],
  controllers: [EnrollmentEndpoint],
  providers: [EnrollmentDesk],
  exports: [EnrollmentDesk],
})
export class EnrollmentModule {}
