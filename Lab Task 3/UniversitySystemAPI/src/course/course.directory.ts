import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseDirectory {
  all() {
    return {
      message: 'All courses fetched',
      data: [],
    };
  }

  byId(id: string) {
    return {
      message: 'Course fetched',
      id,
    };
  }

  register(name: string, code: string) {
    return {
      message: 'Course created',
      data: {
        name,
        code,
      },
    };
  }
}
