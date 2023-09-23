import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();


export const port = Number(process.env.API_PORT);
export const prisma = new PrismaClient();
