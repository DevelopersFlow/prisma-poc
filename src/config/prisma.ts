import { PrismaClient } from "@prisma/client";

const jarvis = new PrismaClient();

const edward = new PrismaClient({
  datasources: { db: { url: 'db:edward' } },
});

const prismaClient = {
  jarvis,
  edward,
};

export { prismaClient };
