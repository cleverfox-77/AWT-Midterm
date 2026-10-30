import { Module } from '@nestjs/common';
import { EnrollmentModule } from '../enrollment/enrollment.module.js';
import { NotificationEndpoint } from './notification.endpoint.js';

@Module({
  imports: [EnrollmentModule],
  controllers: [NotificationEndpoint],
})
export class NotificationModule {}
