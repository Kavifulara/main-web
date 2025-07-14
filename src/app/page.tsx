import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to BAKFiG
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Where Elegance Meets Style
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Discover the latest trends in men's, women's, and kids' fashion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Collections
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold z-10">MEN</span>
                </div>
                <Image
                  src="/images/mens-fashion.jpg"
                  alt="Men's Fashion"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Men's Fashion</h3>
                <p className="text-gray-600 mb-4">Discover sophisticated clothing for men</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Shop Men's wear
                </button>
              </div>
            </div>

            {/* Women's Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-pink-400 to-pink-600">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold z-10">WOMEN</span>
                </div>
                <Image
                  src="/images/womens-fashion.jpg"
                  alt="Women's Fashion"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Women's Fashion</h3>
                <p className="text-gray-600 mb-4">Explore elegant styles for women</p>
                <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  Shop Women's wear
                </button>
              </div>
            </div>

            {/* Kids' Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold z-10">KIDS</span>
                </div>
                <Image
                  src="/images/kids-fashion.jpg"
                  alt="Kids' Fashion"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Kids' Fashion</h3>
                <p className="text-gray-600 mb-4">Charming clothing for children</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Shop Kids' wear
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              New Releases
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest arrivals and trending styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                  <Image
                  src="/images/t-shirt.jpg"
                  alt="Kids' Fashion"
                  fill
                  className="object-cover"
                  priority
                />
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                  NEW
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  Premium Cotton T-Shirt
                </h3>
                <p className="text-sm text-gray-600 mb-2">Men's Collection</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">₹1,299</span>
                    <span className="text-sm text-gray-500 line-through">₹1,599</span>
                  </div>
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                  <Image
                  src="/images/summer-dress.jpg"
                  alt="Kids' Fashion"
                  fill
                  className="object-cover"
                  priority
                />
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                  NEW
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  Elegant Summer Dress
                </h3>
                <p className="text-sm text-gray-600 mb-2">Women's Collection</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">₹2,499</span>
                    <span className="text-sm text-gray-500 line-through">₹2,999</span>
                  </div>
                  <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors transform hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                  <Image
                  src="/images/jumpsuit.jpg"
                  alt="Kids' Fashion"
                  fill
                  className="object-cover"
                  priority
                />
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                  NEW
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  Cute Kids Jumpsuit
                </h3>
                <p className="text-sm text-gray-600 mb-2">Kids' Collection</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">₹899</span>
                    <span className="text-sm text-gray-500 line-through">₹1,199</span>
                  </div>
                  <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors transform hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                  <Image
                  src="/images/handbag.jpg"
                  alt="Kids' Fashion"
                  fill
                  className="object-cover"
                  priority
                />
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                  NEW
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  Designer Handbag
                </h3>
                <p className="text-sm text-gray-600 mb-2">Accessories</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">₹3,999</span>
                    <span className="text-sm text-gray-500 line-through">₹4,999</span>
                  </div>
                  <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors transform hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View All New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose BAKFiG?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">Curated selection of high-quality fashion items</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Elegant Design</h3>
              <p className="text-gray-600">Timeless designs that never go out of style</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
