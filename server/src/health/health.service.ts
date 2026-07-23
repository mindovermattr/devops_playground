import { Injectable } from '@nestjs/common';
import { sql } from 'drizzle-orm';
import { DatabaseService } from 'src/db/database.service';

@Injectable()
export class HealthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async checkHealth() {
    try {
      await this.databaseService.db.execute(sql`SELECT 1`);

      return { status: 'ok' };
    } catch (error: unknown) {
      return { status: 'error', message: (error as Error).message };
    }
  }
}
