import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { HealthService } from './health.service';
import { HealthCheckResponseDto } from './responses';

@ApiTags('/health')
@Controller({
  path: '/health',
  version: '1',
})
export class HealthController {
  public constructor(private readonly healthService: HealthService) {}

  @Get('/')
  @ApiOkResponse({
    type: HealthCheckResponseDto,
    description: 'Returns current health status of the API',
  })
  public healthCheck(): HealthCheckResponseDto {
    return this.healthService.getHealth();
  }
}
