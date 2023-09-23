import { app } from '../index'
// import express from 'express';
import { PrismaClient } from '@prisma/client';
import supertest from 'supertest';
// import request from 'supertest';

const prisma = new PrismaClient();
// const app = express();

const request = supertest(app);
// let server: any;


beforeAll(async () => {
    // server = app.listen();
    await prisma.$executeRaw`DELETE FROM "tokens";`;
    await prisma.$executeRaw`DELETE FROM "agents";`;
    await prisma.$executeRaw`DELETE FROM "users";`;
});

afterAll(async () => {
    await prisma.$disconnect();
    // server.close();
});

export { app, request }