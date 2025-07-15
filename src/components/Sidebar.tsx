'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Category {
  name: string;
  href: string;
  count: number;
}

interface CategorySection {
  title: string;
  categories: Category[];
}

const categoryData: CategorySection[] = [
  {
    title: "Men's Fashion",
    categories: [
      { name: "T-Shirts", href: "/mens/tshirts", count: 45 },
       { name: "Hoodies", href: "/mens/hoodies", count: 23 },
    ]
  },
  {
    title: "Women's Fashion",
    categories: [
      { name: "T-Shirts", href: "/womens/tshirts", count: 67 },
      { name: "Hoodies", href: "/womens/hoodies", count: 54 },
    ]
  },
  {
    title: "Kids' Fashion",
    categories: [
      { name: "Boys' Clothing", href: "/kids/boys", count: 34 },
      { name: "Girls' Clothing", href: "/kids/girls", count: 39 },
      { name: "Party Wear", href: "/kids/party", count: 21 },
    ]
  }
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("Men's Fashion");

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
        
        {/* Section Tabs */}
        <div className="flex flex-col space-y-2 mb-6">
          {categoryData.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section.title)}
              className={`text-left px-3 py-2 rounded-lg transition-colors ${
                activeSection === section.title
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Categories for Active Section */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">
            {activeSection}
          </h3>
          <div className="space-y-1">
            {categoryData
              .find(section => section.title === activeSection)
              ?.categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group"
                >
                  <span className="group-hover:font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-md font-medium text-gray-700 mb-3">Filters</h3>
          
          {/* Price Range */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Price Range</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Under ₹2,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">₹2,000 - ₹4,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">₹4,000 - ₹8,000</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Over ₹8,000</span>
              </label>
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Size</h4>
            <div className="grid grid-cols-3 gap-1">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Color</h4>
            <div className="flex flex-wrap gap-2">
              {['Red', 'Blue', 'Green', 'Black', 'White', 'Gray'].map((color) => (
                <button
                  key={color}
                  className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100 transition-colors"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 