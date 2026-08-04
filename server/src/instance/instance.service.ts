import { Injectable } from '@nestjs/common';

@Injectable()
export class InstanceService {
  getInstanceInfo() {
    return {
      name: process.env.HOSTNAME || 'default-instance',
      version: process.env.INSTANCE_VERSION || 'def-null',
      environment: process.env.NODE_ENV || 'def-null',
    };
  }
}
