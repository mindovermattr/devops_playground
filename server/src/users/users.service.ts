import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/db/database.service';
import { users } from 'src/db/scheme/user.scheme';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getUser() {
    try {
      const result = await this.databaseService.db.select().from(users);
      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to get user: ${message}`);
    }
  }
}
