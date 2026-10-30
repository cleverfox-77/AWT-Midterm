import { Body, Controller, Post } from '@nestjs/common';
import { EnrollmentDesk } from '../enrollment/enrollment.desk.js';

type NotificationRequest = {
  studentName: string;
  message: string;
};

type CheckRequest = {
  studentName: string;
  courseId: string;
};

@Controller('notification')
export class NotificationEndpoint {
  constructor(private readonly desk: EnrollmentDesk) {}

  @Post('send')
  send(@Body() request: NotificationRequest) {
    return this.desk.notify(request.studentName, request.message);
  }

  @Post('check')
  check(@Body() request: CheckRequest) {
    return this.desk.verify(request.studentName, request.courseId);
  }
}
