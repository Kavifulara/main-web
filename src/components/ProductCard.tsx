'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={product.isNew}
        />
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse z-10">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-800 mb-1 text-lg line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.oldPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block text-xs text-gray-500 mb-1">Size:</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`px-2 py-1 rounded border text-xs font-medium transition-colors ${selectedSize === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          onClick={() => onAddToCart?.(product, selectedSize)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 