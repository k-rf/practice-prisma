import { PrismaClient } from '@prisma/client';

import { Uuid } from '../src/libs/uuid';

const main = async () => {
  for (let i = 1; i <= 200; i++) {
    const prisma = new PrismaClient({
      datasources: {
        db: { url: `${process.env.DATABASE_URL}?schema=practice_prisma_${i}` },
      },
    });

    await prisma.user.create({
      data: {
        user_id: new Uuid().value,
        email: 'john_doe@example.com',
        name: 'john doe',
        Post: {
          create: {
            id: new Uuid().value,
          },
        },
      },
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
