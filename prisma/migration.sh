#! /bin/bash

echo ${DATABASE_URL}
for i in `seq 200`
do
    DATABASE_URL="${DATABASE_URL}?schema=practice_prisma_$i" yarn prisma migrate dev
done
