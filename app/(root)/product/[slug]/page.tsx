import React from 'react';
import { getProductBySlug } from '@/lib/actions/product.actions';

export default async function ProductDetailsPage({
    params,
}:{
    params: { slug: string };
}) {
    const {slug} = await params;

    // Obtener información en la base de datos del producto {slug}
    const product = await getProductBySlug(slug);
  return (
    <div>
        <h1>Detalle del producto: {slug}</h1>
        <p>{product?.description}</p>
    </div>
  )
}
