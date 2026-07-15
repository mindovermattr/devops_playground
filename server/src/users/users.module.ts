import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
