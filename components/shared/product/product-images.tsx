"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string>(images?.[0] || '');
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Image
            src={selectedImage}
            alt="imagen de producto seleccionada"
            width={1000}
            height={1000}
            className="min-h-[300px] object-cover object-center"
            priority
        />
      </div>

      {/* Perspectivas de imagen */}
      {images.length > 1 &&
        <div className="flex justify-center gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <Button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`relative shrink-0 w-24 h-24 p-0 overflow-hidden rounded-md border-2 transition-all ${
                selectedImage === image
                  ? 'border-black'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-md"
              />
            </Button>
          ))}
        </div>
      }
    </div>
  )
}
