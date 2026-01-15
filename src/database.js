import { PrismaClient } from '@prisma/client';
import { DATABASE_URL } from './config/config.js';  

const prisma = new PrismaClient();

export default prisma;
