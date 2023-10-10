import { PrismaClient } from "@prisma/client";

const client = global.prismdb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismdb = client;

export default client;
