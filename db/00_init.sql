CREATE ROLE "practice_prisma" LOGIN PASSWORD '$(ROLE_PASSWORD)' CREATEDB;
CREATE DATABASE "practice_prisma";

SET timezone TO 'UTC';

CREATE EXTENSION "uuid-ossp";

GRANT CREATE ON DATABASE practice_prisma TO practice_prisma;
