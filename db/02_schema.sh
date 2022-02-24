#! /bin/bash

for i in `seq 200`
do
    psql -U practice_prisma -d practice_prisma -c "CREATE SCHEMA \"practice_prisma_$i\"";
done
