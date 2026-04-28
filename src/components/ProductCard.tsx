// handles how a product card will be shown when the actual product page is not visited

"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { useWishlist } from "@/context/WishlistContext";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string) => void;
}


export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  const [isHovered, setIsHovered] = useState(false);

  const [added, setAdded] = useState(false);
  
  
  


  const flyToCart = (imgSrc: string, event: React.MouseEvent<HTMLElement>) => {
    const cart = document.getElementById("cart-icon");
    if (!cart) return;
  
    const img = document.createElement("img");
    img.src = imgSrc;
  
    const rect = event.currentTarget.getBoundingClientRect();
  
    img.style.position = "fixed";
    img.style.left = rect.left + "px";
    img.style.top = rect.top + "px";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.borderRadius = "12px";
    img.style.zIndex = "9999";
    img.style.transition = "all 0.8s ease-in-out";
  
    document.body.appendChild(img);
  
    const cartRect = cart.getBoundingClientRect();
  
    setTimeout(() => {
      img.style.left = cartRect.left + "px";
      img.style.top = cartRect.top + "px";
      img.style.width = "20px";
      img.style.height = "20px";
      img.style.opacity = "0.5";
    }, 10);
  
    setTimeout(() => {
      img.remove();
    }, 800);
  };

  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-2xl

      bg-[rgba(255,255,255,0.04)] backdrop-blur-xl
      border border-white/10
      
      shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      transition-all duration-500
      
      hover:-translate-y-2 hover:scale-[1.02]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >

      <div className="absolute inset-0 rounded-2xl pointer-events-none">

        {/* Border */}
        <div className="absolute inset-0 rounded-2xl border border-transparent 
        group-hover:border-yellow-400/50 transition-all duration-500" />
      
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
        shadow-[0_0_30px_rgba(255,215,0,0.25)] transition-all duration-500" />
      
      </div>

      {/* GLASS SHINE */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
      bg-gradient-to-br from-white/10 via-transparent to-transparent 
      transition-all duration-500 pointer-events-none" />
    
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={product.isNew}
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse shadow-lg">
              NEW
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="relative">

          {/* ❤️ Heart Icon */}
          <button
            onClick={() =>
              wishlisted
                ? removeFromWishlist(product.id)
                : addToWishlist(product as Product)
            }
            className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300
              ${wishlisted ? "bg-red-500 animate-pop scale-110" : "bg-gray-700 hover:scale-110"}
            `}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                wishlisted ? "fill-white text-white" : "text-white"
              }`}
            />
          </button>
        </div>
    


        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="flex gap-3">
            <Link href={`/product/${product.id}`}>
              <button className="bg-white dark:bg-black text-gray-800 dark:text-white px-4 py-2 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform hover:scale-105 shadow-lg">
                Quick View
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <Link href={`/product/${product.id}`}>
          <h3 className="mt-3 font-semibold text-gray-200 group-hover:text-white transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
        
        {/* Price */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-bold text-gray-200">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400 line-through">₹{product.oldPrice.toLocaleString()}</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                Save ₹{(product.oldPrice - product.price).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200 mb-2">Size:</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  selectedSize === size 
                    ? 'bg-gray-500 text-white border-yellow-400 shadow-md transform scale-105' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-300 ml-2">(4.8)</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`mt-auto w-full py-3 rounded-xl font-bold transition-all duration-300 transform shadow-lg 
            { added && (
              <div className="absolute bottom-4 right-4 bg-black text-yellow-400 px-4 py-2 rounded-lg text-sm shadow-lg animate-bounce ring-1 ring-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
                Added to cart 🛒
              </div>
            )}
          `}
          onClick={(e) => {

            if (!selectedSize) {
              toast.error("Select size first");
              return;
            }

            onAddToCart?.(product, selectedSize);
            flyToCart(product.image, e);

            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          >
            {added ? "Added ✅" : "Add to Cart"}
          </button>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="lg:hidden absolute bottom-4 right-4">
        <button
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          onClick={() => {
            console.log("clicked");
            onAddToCart?.(product, selectedSize);
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
        </button>
      </div>
    </div>
  );
}
