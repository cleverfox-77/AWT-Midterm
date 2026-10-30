import { Injectable } from '@nestjs/common';
import { NewCourseDto } from './dto/new-course.dto.js';
import { CoursePatchDto } from './dto/course-patch.dto.js';

@Injectable()
export class CourseRegistry {
  list() {
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  find(id: string) {
    return {
      message: 'Course fetched successfully',
      id,
    };
  }

  add(dto: NewCourseDto) {
    return {
      message: 'Course created successfully',
      data: dto,
    };
  }

  replace(id: string, dto: CoursePatchDto) {
    return {
      message: 'Course updated successfully',
      id,
      data: dto,
    };
  }

  amend(id: string, dto: CoursePatchDto) {
    return {
      message: 'Course patched successfully',
      id,
      updatedFields: Object.keys(dto),
    };
  }

  remove(id: string) {
    return {
      message: 'Course deleted successfully',
      id,
    };
  }

  attach(id: string, file: Express.Multer.File) {
    const path = file.path
      ? file.path.replace(/\\/g, '/')
      : `uploads/${file.filename}`;

    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path,
    };
  }
}
