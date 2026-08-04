import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { InstanceService } from './instance/instance.service';
import { InstanceModule } from './instance/instance.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, HealthModule, InstanceModule],
  controllers: [AppController],
  providers: [AppService, InstanceService],
})
export class AppModule {}
