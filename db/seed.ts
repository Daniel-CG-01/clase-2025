import { PrismaClient } from "@/lib/generated/prisma/client";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();
    await prisma.product.createMany({data: sampleData.products});
    console.log("Productos introducidos en la base de datos");
}

main();
