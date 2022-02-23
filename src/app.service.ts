import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}

  async getHello() {
    const result = await this.prisma.user.findMany();

    console.log(new Date(), result[0].user_id, result[0].name);

    return 'Hello World!';
  }
}
