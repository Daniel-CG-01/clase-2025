import React from 'react';
import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';
import { getLatestProducts } from '@/lib/actions/product.actions';

export default async function Homepage() {
  const data = await getLatestProducts();
  return (
    <>
    <div className='wrapper'>
      <ProductList data={data} title='Mi lista' limit={4}/>
    </div>
    </>
  )
}