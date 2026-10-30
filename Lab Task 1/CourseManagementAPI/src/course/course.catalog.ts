import { Injectable } from '@nestjs/common';

type Operation = 'list' | 'find' | 'add' | 'replace' | 'amend' | 'remove';

@Injectable()
export class CourseCatalog {
  private readonly handlers: Record<Operation, (id?: string) => string> = {
    list: () => 'Get All Courses - from Service',
    find: (id) => `Get Course with ID: ${id} - from Service`,
    add: () => 'Create Course - from Service',
    replace: (id) => `Update Course ${id} - from Service`,
    amend: (id) => `Patch Course ${id} - from Service`,
    remove: (id) => `Delete Course ${id} - from Service`,
  };

  run(operation: Operation, id?: string): string {
    return this.handlers[operation](id);
  }
}
