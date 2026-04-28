"use client";

import { useState } from 'react';
import Link from 'next/link';
import toast from "react-hot-toast";
import { Product ,products } from '@/data/products';
import { useFilter } from "@/context/FilterContext";

type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type PriceRange = "0-2000" | "2000-4000" | "4000-8000" | "8000+";


interface Category {
  name: string;
  href: string;
  count: number;
}

interface CategorySection {
  title: string;
  value: string;
  categories: Category[];
}


const categoryData: CategorySection[] = [
  {
    title: "Men's Fashion",
    value: "Men",
    categories: [
      { name: "T-Shirts", href: "/mens/tshirts", count: 45 },
       { name: "Hoodies", href: "/mens/hoodies", count: 23 },
    ]
  },
  {
    title: "Women's Fashion",
    value: "Women",
    categories: [
      { name: "T-Shirts", href: "/womens/tshirts", count: 67 },
      { name: "Hoodies", href: "/womens/hoodies", count: 54 },
    ]
  },
  {
    title: "Kids' Fashion",
    value: "Kids",
    categories: [
      { name: "Boys' Clothing", href: "/kids/boys", count: 34 },
      { name: "Girls' Clothing", href: "/kids/girls", count: 39 },
      { name: "Party Wear", href: "/kids/party", count: 21 },
    ]
  }
];



export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const {
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    selectedPrices,
    setSelectedPrices,
    selectedSizes,
    setSelectedSizes,
  } = useFilter();

  const showCategoryAlert = () => {
    toast.dismiss();
    toast.error("Select a category first 👕", {
      duration: 2000,
      position: "top-center",

      style: {
        borderRadius: "12px",
        background: "#111",
        color: "#fff",
        padding: "12px 16px",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#ff4d4f",
        secondary: "#fff",
      },
    });
  };


  const handleCategoryClick = (section: CategorySection & { value: string }) => {
    setActiveSection(section.title);
    setSelectedCategory(section.value);
    setSelectedSubCategory(null);
  
    // reset filters
    setSelectedPrices([]);
    setSelectedSizes([]);
  };

  const handlePriceChange = (range: string) => {
    if (!selectedCategory ) {
      showCategoryAlert();
      return;
    }
  
    setSelectedPrices([range]);
  };

  const handleSizeClick = (size: string) => {
    if (!selectedCategory ) {
      showCategoryAlert();
      return;
    }
  
    setSelectedSizes([size]);
  };


  return (
    <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white">

      
      <div className="relative overflow-hidden rounded-lg"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent  animate-shine"></div>
        </div>
    
      {/* Content */}
      <div className="relative z-20 p-4 pb-20">
        <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
        
        {/* Section Tabs */}
        <div className="flex flex-col space-y-2 mb-6">
          {categoryData.map((section) => (
            <button
              key={section.title}
              onClick={() =>  handleCategoryClick(section)}
              className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === section.title && selectedCategory
                  ? 'bg-blue-100 text-blue-700 font-medium scale-105 shadow-md'
                  : 'text-white hover:bg-gray-500 hover:scale-[1.02]'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Categories for Active Section */}
        <div>
          <h3 className="text-md font-medium text-gray-200 mb-3">
            {activeSection}
          </h3>
          <div className="space-y-1">
            {categoryData
              .find(section => section.title === activeSection)
              ?.categories.map((category) => (
                <Link
                  key={category.name}
                  href="/shop"
                  onClick={() => setSelectedSubCategory(category.name)}
                  className="flex items-center justify-between px-3 py-2 text-sm text-white hover:bg-gray-500 hover:text-white rounded-lg transition-colors group"
                >
                  <span className="group-hover:font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 ">
          <h3 className="text-md font-medium text-gray-200 mb-3">Filters</h3>
          
          {/* Price Range */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-200 mb-2">Price Range</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer"
                  checked={selectedPrices[0] === "0-2000"}
                  onChange={() => handlePriceChange("0-2000")}
                />
                <span className="text-sm text-white">Under ₹2,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 cursor-pointer" 
                  checked={selectedPrices[0] === "2000-4000"}
                  onChange={() => handlePriceChange("2000-4000")}
                />
                <span className="text-sm text-white">₹2,000 - ₹4,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 cursor-pointer" 
                  checked={selectedPrices[0] === "4000-8000"}
                  onChange={() => handlePriceChange("4000-8000")}
                />
                <span className="text-sm text-white">₹4,000 - ₹8,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 cursor-pointer" 
                  checked={selectedPrices[0] === "8000+"}
                  onChange={() => handlePriceChange("8000+")}
                />
                <span className="text-sm text-white">Over ₹8,000</span>
              </label>
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-200 mb-2">Size</h4>
            <div className="grid grid-cols-3 gap-1">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size as Size)}
                  className={`text-xs border rounded px-2 py-1 transition-all text-white ${

                    selectedSizes[0] === size
                      ? "bg-white text-black scale-105"
                      : "border-gray-300 hover:bg-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add more filters like Color, Brand, etc. as needed */}
        </div>
      </div>
    </div>
  );
} 