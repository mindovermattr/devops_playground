import { Controller, Get } from '@nestjs/common';
import { InstanceService } from './instance.service';

@Controller('instance')
export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Get()
  getInstanceInfo() {
    return this.instanceService.getInstanceInfo();
  }
}
