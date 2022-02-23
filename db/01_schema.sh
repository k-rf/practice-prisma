#! /bin/bash

psql -U practice_prisma -d practice_prisma -c 'CREATE SCHEMA "practice_prisma_alpha"';
psql -U practice_prisma -d practice_prisma -c 'CREATE SCHEMA "practice_prisma_beta"';
