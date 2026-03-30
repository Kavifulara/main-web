'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductPage() {
  const params = useParams();
  const productId = params.productId;
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      // Enhance product data with additional details for a complete clothing website experience
      const enhancedProduct = {
        ...foundProduct,
        rating: 4.5,
        reviews: Math.floor(Math.random() * 2000) + 500,
        images: [
          foundProduct.image,
          foundProduct.image, // In a real app, you'd have multiple images
          foundProduct.image,
        ],
        colors: ['Black', 'White', 'Navy', 'Grey', 'Red'],
        features: [
          '100% Premium Cotton',
          'Pre-shrunk fabric',
          'Machine washable',
          'Comfortable fit',
          'Fade resistant colors',
          'Breathable material',
          'Durable stitching'
        ],
        specifications: {
          fabric: '100% Cotton',
          fit: 'Regular Fit',
          sleeve: foundProduct.category.includes('hoodie') ? 'Long Sleeve' : 'Short Sleeve',
          pattern: 'Solid',
          occasion: 'Casual',
          care: 'Machine wash cold',
          origin: 'Made in India'
        },
        sizeChart: {
          'S': { chest: '36"', length: '26"', shoulder: '16"' },
          'M': { chest: '38"', length: '27"', shoulder: '17"' },
          'L': { chest: '40"', length: '28"', shoulder: '18"' },
          'XL': { chest: '42"', length: '29"', shoulder: '19"' },
          'XXL': { chest: '44"', length: '30"', shoulder: '20"' }
        }
      };
      setProduct(enhancedProduct);
      setSelectedSize(enhancedProduct.sizes[0]);
    }
  }, [productId]);

  const discountPercentage = product?.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 lg:ml-72">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/${product.category.split('-')[0]}`} className="text-blue-600 hover:text-blue-800 capitalize">
            {product.category.split('-')[0]}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl bg-white">
              <Image 
                src={product.images[activeImageIndex]} 
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  NEW
                </div>
              )}
              {discountPercentage > 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discountPercentage}% OFF
                </div>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'border-blue-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">({product.rating})</span>
                </div>
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.oldPrice.toLocaleString()}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Save ₹{(product.oldPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Color: <span className="font-normal text-gray-600">{selectedColor}</span></h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      selectedColor === color 
                        ? 'border-blue-500 scale-110 shadow-lg' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                     color.toLowerCase() === 'black' ? '#000000' :
                                     color.toLowerCase() === 'navy' ? '#001f3f' :
                                     color.toLowerCase() === 'grey' ? '#808080' :
                                     color.toLowerCase() === 'red' ? '#ff0000' : color.toLowerCase()
                    }}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Size: <span className="font-normal text-gray-600">{selectedSize}</span></h3>
                <button 
                  className="text-blue-600 hover:text-blue-800 text-sm underline"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedSize === size 
                        ? 'border-blue-500 bg-blue-500 text-white shadow-lg transform scale-105' 
                        : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              {/* Size Guide Modal */}
              {showSizeGuide && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2">Size Chart</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1">Size</th>
                          <th className="text-left py-1">Chest</th>
                          <th className="text-left py-1">Length</th>
                          <th className="text-left py-1">Shoulder</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.sizeChart).map(([size, measurements]) => (
                          <tr key={size} className="border-b">
                            <td className="py-1 font-medium">{size}</td>
                            <td className="py-1">{measurements.chest}</td>
                            <td className="py-1">{measurements.length}</td>
                            <td className="py-1">{measurements.shoulder}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button 
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button 
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-green-600 font-medium">✓ In Stock</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Add to Cart - ₹{(product.price * quantity).toLocaleString()}
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                  Buy Now
                </button>
                <button 
                  className={`py-3 rounded-xl font-bold border-2 transition-all duration-300 ${
                    isWishlisted 
                      ? 'bg-red-500 text-white border-red-500' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:text-red-500'
                  }`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  {isWishlisted ? '♥ Wishlisted' : '♡ Add to Wishlist'}
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-lg font-semibold text-gray-800 mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
                <div className="text-5xl font-bold text-gray-800 mb-2">{product.rating}</div>
                <div className="flex justify-center text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-gray-600">{product.reviews} total reviews</div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center gap-4">
                    <span className="text-sm font-medium w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
