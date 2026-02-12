"use server";
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';

export async function getLatestProducts() {
    const data = await prisma.producto.findMany({
        orderBy: { createdAt: "desc" },
    });
  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
    const data = await prisma.producto.findFirst({
      where: { slug },
    })
  return data;
}
