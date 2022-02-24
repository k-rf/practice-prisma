#! /bin/bash

psql -U postgres -c "CREATE ROLE practice_prisma LOGIN PASSWORD '$ROLE_PASSWORD' CREATEDB"
psql -U postgres -c "CREATE DATABASE practice_prisma";
