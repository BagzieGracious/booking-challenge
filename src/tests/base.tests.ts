import { app } from '../index'
import { PrismaClient } from '@prisma/client';
import supertest from 'supertest';

const prisma = new PrismaClient();
const request = supertest(app);


beforeAll(async () => {
    await prisma.$executeRaw`DELETE FROM "tokens";`;
    await prisma.$executeRaw`DELETE FROM "agents";`;
    await prisma.$executeRaw`DELETE FROM "users";`;
});

afterAll(async () => {
    await prisma.$disconnect();
});

export { app, request }