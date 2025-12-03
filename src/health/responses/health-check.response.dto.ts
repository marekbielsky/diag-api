import { ApiProperty } from '@nestjs/swagger';

interface HealthCheckResponseProps {
  status: string;
  timestamp: string;
  uptime: number;
}

export class HealthCheckResponseDto {
  @ApiProperty({ example: 'ok', description: 'Current status of the service' })
  public status: string;

  @ApiProperty({
    example: '2025-12-03T16:52:00.123Z',
    description: 'Timestamp when health check was performed',
  })
  public timestamp: string;

  @ApiProperty({
    example: 12.345,
    description: 'Uptime of the application in seconds',
  })
  public uptime: number;

  public constructor(props: HealthCheckResponseProps) {
    Object.assign(this, props);
  }
}
