# Learning Prisma
Experimenting with a simple hello-world project in prisma.
Guide: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres

Initialize: `prisma init`
- Creates initial configuration and .env

Migrate: `prisma migrate dev --name init`
- Creates a new migration with name, and applies it to the database.
- There are other versions of this command for interacting with prod.

Generate Client: `prisma generate`

Next: https://github.com/prisma/prisma-examples/tree/latest/typescript/grpc
- Explore GRPC