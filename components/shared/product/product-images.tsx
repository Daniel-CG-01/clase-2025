// Decidir si será de servidor o de cliente

import React from 'react';
import Image from 'next/image';

export default function ProductImages() {
  return (
    <>
        <div>
            <Image 
                src={'/images/sample-products/p1-1.jpg'} 
                alt='image de prueba' 
                width={1000} 
                height={1000}
                className='min-h-[300px] object-cover object-center'
            />
        </div>
    </>
  )
}
