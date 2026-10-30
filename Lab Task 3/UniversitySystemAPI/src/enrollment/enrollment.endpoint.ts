import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentDesk } from './enrollment.desk.js';

type EnrollmentRequest = {
  studentName: string;
  courseId: string;
};

@Controller('enrollment')
export class EnrollmentEndpoint {
  constructor(private readonly desk: EnrollmentDesk) {}

  @Get()
  list() {
    return this.desk.all();
  }

  @Post()
  create(@Body() request: EnrollmentRequest) {
    return this.desk.enroll(request.studentName, request.courseId);
  }
}
