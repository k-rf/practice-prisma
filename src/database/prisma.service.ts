import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class PrismaService implements OnModuleDestroy {
  private clients: { [key: string]: PrismaClient } = {};

  getClient(request: Request<{ tenant: string }>): PrismaClient {
    const tenantId = request.params.tenant;
    const client = this.clients[tenantId];

    if (!client) {
      const databaseUrl = `postgresql://practice_prisma:P@ssw0rd@db:5432/practice_prisma?schema=${tenantId}`;

      this.clients[tenantId] = new PrismaClient({
        datasources: {
          db: { url: databaseUrl },
        },
      });
    }

    this.clients[tenantId] = new PrismaClient();

    return this.clients[tenantId];
  }

  async onModuleDestroy() {
    await Promise.all(
      Object.values(this.clients).map((client) => client.$disconnect())
    );
  }
}
