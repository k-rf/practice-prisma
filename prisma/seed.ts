import { PrismaClient } from '@prisma/client';

import { Uuid } from '../src/libs/uuid';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.createMany({
    data: [
      {
        user_id: new Uuid().value,
        email: 'john_doe@example.com',
        name: 'john doe',
      },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
