import { Injectable } from '@nestjs/common';

import { HealthCheckResponseDto } from './responses';

@Injectable()
export class HealthService {
  public getHealth(): HealthCheckResponseDto {
    return new HealthCheckResponseDto({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }
}
