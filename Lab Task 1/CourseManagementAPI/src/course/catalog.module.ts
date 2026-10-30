import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller.js';
import { CourseCatalog } from './course.catalog.js';

@Module({
  controllers: [CatalogController],
  providers: [CourseCatalog],
})
export class CatalogModule {}
