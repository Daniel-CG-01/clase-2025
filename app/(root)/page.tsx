import React from 'react';
import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';

export default function Homepage() {
  return (
    <>
    <div className='wrapper'>
      <ProductList data={sampleData.products} title='Mi lista' limit={4}/>
    </div>
    </>
  )
}