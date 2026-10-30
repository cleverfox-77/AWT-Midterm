import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { databaseConfig } from './database.config.js';
import { InventoryModule } from './inventory/inventory.module.js';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig()), InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
