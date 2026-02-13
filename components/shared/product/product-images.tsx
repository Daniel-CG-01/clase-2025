"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string>(images?.[0] || '');

    // Si no hay imágenes, no se muestra nada
    if (!images || images.length === 0) return null;
  return (
    <div className="flex flex-col gap-4">
      {/* IMAGEN PRINCIPAL */}
      <div className="flex justify-between">
        <Image
            src={selectedImage}
            alt="imagen del producto seleccionado"
            width={1000}
            height={1000}
            className="min-h-[300px] object-cover object-center"
            priority
        />
      </div>

      {/* IMÁGENES SECUNDARIAS */}
      {images.length > 1 &&
        <div className="flex justify-center items-center gap-2 over-flow-x-auto">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative shrink-0 rounded-md border-2 transition-all ${
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
            </div>
          ))}
        </div>
      }
    </div>
  )
}
