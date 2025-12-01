"use server";

import { prisma } from "@/db/prisma";

export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        orderBy: {createdAt: "desc"}
    });
    
    return data;
}