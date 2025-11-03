import React from 'react';
import { Product } from '@/types/Product';

export default function ProductList({
    data, title, limit
}:{
    data: Product[];
    title?: string;
    limit?: number;
}) {
    const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <>
    <div className='my-10'>
        <h2></h2>
    </div>
    </>
  )
}
