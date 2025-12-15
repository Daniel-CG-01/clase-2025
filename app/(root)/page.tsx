import React from 'react';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductImages from '@/components/shared/product/product-images';
import ProductPrice from '@/components/shared/product/product-price';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  // Obtener información en la base de datos del producto {slug}
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-5'>
        
        {/* Sección imágenes x2 */}
        <div className='col-span-2'>
          
          {/* {IMAGEN} */}
          <ProductImages/>

        </div>

        {/* Columna detalles x2 */}
        <div className='col-span-2 p-5'>
          <div className='flex flex-col gap-6'>
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className='h3-bold'>
              {product.name}
            </h1>
            <p>
              {product.rating} of {product.numReviews} reviews
            </p>
            <div className='flex flex-col sm:flex-row gap 3 sm:items-center'>
              <ProductPrice
                value={Number(product.price)}
                clasName='w-24 rounded-full bg-green-100 text-green-700 px-5 py2'
              />
            </div>
            <div className='mt-10'>
              <p className='font-semibold'>
                Description
              </p>
              <p>
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Columna acciones x1 */}
        <div className='col-span-1'>
          <Card>
            <CardContent className='p-4'>
              <div className='mb-2 flex justify-between'>
                <div>
                  Price
                </div>
                <div>
                  <ProductPrice value={Number(product.price)}/>
                </div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>
                  Status
                </div>
                {product.stock > 0 ?
                  (<Badge variant={'outline'}>In Stock</Badge>):
                  (<Badge variant={'destructive'}>Out of Stock</Badge>)
                }
              </div>
              {product.stock > 0 && (
                <div className='flex-center'>
                  <Button className='w-full'>Add to cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </section>
    </>
  )
}