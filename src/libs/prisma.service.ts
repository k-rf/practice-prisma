/*
https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services
*/

import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { Uuid } from './uuid';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async seed() {
    await this.user.createMany({
      data: [
        {
          user_id: new Uuid().value,
          email: 'john_doe@example.com',
          name: 'john doe',
        },
      ],
    });
  }
}
