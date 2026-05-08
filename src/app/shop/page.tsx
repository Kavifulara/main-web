"use client";

import { Product ,products } from "@/data/products";
import { useFilter } from "@/context/FilterContext";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const {
    selectedCategory,
    selectedSubCategory,
    selectedPrices,
    selectedSizes,
  } = useFilter();
  
  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
  
    if (selectedSubCategory && product.subCategory !== selectedSubCategory) {
      return false;
    }
  
    if (selectedPrices.length > 0) {
      const range = selectedPrices[0];

      if (range === "8000+") {
        if (product.price < 8000) return false;
      } else {
        const [min, max] = range.split("-").map(Number);
        if (product.price < min || product.price > max) return false;
      }
    }
  
    if (selectedSizes.length > 0) {
      if (!product.sizes.includes(selectedSizes[0])) return false;
      
    }
  
    return true;
  });

  

  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-200">

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    
          <h2 className="text-2xl font-semibold">
            No products found 😕
          </h2>
    
          <p className="text-gray-400 mt-2">
            Try changing filters or selecting a different category.
          </p>
    
          {/* Premium Reset Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 rounded-full font-semibold
    
            bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200
            text-gray-900 border border-white/40
    
            shadow-[0_5px_20px_rgba(255,255,255,0.2)]
            hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)]
            transition-all duration-300 hover:scale-105"
          >
            Reset Filters
          </button>
    
        </div>
      ) : (
    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
    
              {/* PREMIUM CARD */}
              <div className="group relative cursor-pointer overflow-hidden rounded-2xl
    
              bg-[rgba(255,255,255,0.04)] backdrop-blur-xl
              border border-white/10
    
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              transition-all duration-500
    
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
    
                {/* Gold Border Glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border border-transparent 
                  group-hover:border-yellow-400/50 transition-all duration-500" />
    
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-500" />
                </div>
    
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
    
                {/* Content */}
                <div className="p-4">
                  <h2 className="text-gray-200 font-semibold group-hover:text-white transition">
                    {product.name}
                  </h2>
    
                  <p className="text-gray-400 mt-1">
                    ₹{product.price}
                  </p>
                </div>
    
              </div>
    
            </Link>
          ))}
        </div>
    
      )}
    </div>
  );
}
    