import { Injectable } from '@nestjs/common';
import { CourseDirectory } from '../course/course.directory.js';

@Injectable()
export class EnrollmentDesk {
  constructor(private readonly courses: CourseDirectory) {}

  all() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }

  enroll(studentName: string, courseId: string) {
    const course = this.courses.byId(courseId);
    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course,
      notification: this.notify(studentName, `Enrolled in course ${courseId}`),
    };
  }

  notify(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      student: studentName,
      notification: message,
    };
  }

  verify(studentName: string, courseId: string) {
    return {
      message: 'Enrollment checked and notification sent',
      student: studentName,
      courseId,
      enrollments: this.all(),
    };
  }
}
