import { PrismaClient } from '@prisma/client';

import { PrismaService } from '../src/libs/prisma.service';

const prisma = new PrismaClient();

const main = async () => {
  const service = new PrismaService();
  await service.seed();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
