"use client";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Product, products } from '@/data/products';
import Link from 'next/link';
import ProductCardWrapper from "@/components/ProductCardWrapper";


export default function Home() {
  // Filter new release products
  const newReleases = products.filter((p) => p.isNew);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  

  // Hero carousel images
  const heroSlides = [
    {
      image: '/images/womens-fashion.PNG',
      title: 'Women\'s Collection',
      subtitle: 'Elegant & Sophisticated',
      description: 'Discover our premium women\'s fashion collection'
    },
    {
      image: '/images/mens-fashion.PNG',
      title: 'Men\'s Collection',
      subtitle: 'Bold & Stylish',
      description: 'Explore our contemporary men\'s fashion line'
    },
    {
      image: '/images/kids-fashion.PNG',
      title: 'Kids Collection',
      subtitle: 'Fun & Comfortable',
      description: 'Adorable styles for your little ones'
    }
  ];

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Intersection Observer for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Abhishek Singh Gaira",
      rating: 5,
      comment: "Kya kapde hai bhai holi mai bhi kharab nhi hote.",
      image: "/images/avatar1.PNG"
    },
    {
      name: "Jaskirat singh rangi",
      rating: 5,
      comment: "Puri Lyari ke liye kapde manga diye saste mai!",
      image: "/images/avatar2.jpg"
    },
    {
      name: "Jameel Jamali",
      rating: 5,
      comment: "Mera bachcha hai tu , tere liye kapde nhi mangaunga to kiske liye mangaunga.",
      image: "/images/avatar3.jpg"
    }
  ];

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkUser = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      const bodyType = localStorage.getItem("bodyType");

      console.log("isLoggedIn:", isLoggedIn);
      console.log("bodyType:", bodyType);

      if (isLoggedIn === "true" && !bodyType) {
        router.push("/onboarding/body-type");
      } else {
        setLoading(false);
      }
    };
    
    // small delay ensures localStorage is ready
    // setTimeout(checkUser, 100);         : if code breaks while storing localstorage data, uncomment this line and comment the line below
    checkUser();
  }, []);

  if (loading) {
    return(
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div> 
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white">
        
        {/* Enhanced Hero Section with Carousel */}
        <section className="relative h-[70vh] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </div>
              <div className="relative z-5 flex items-center justify-center h-full text-white">
                <div className="text-center max-w-4xl mx-auto px-4">
                  <h1 className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>
                  <p className={`text-2xl md:text-3xl mb-4 text-yellow-300 transform transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {slide.subtitle}
                  </p>
                  <p className={`text-lg mb-8 transform transition-all duration-1000 delay-500 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    {slide.description}
                  </p>
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Shop Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white bg-black hover:text-black transition-all duration-300 transform hover:scale-105">
                      Explore Collections
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Products</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Brands</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced New Releases Section */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">New Arrivals</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-2">
                Latest Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the newest trends and must-have pieces from our curated fashion collection
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {newReleases.map((product, index) => (
                <div
                  key={product.id}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProductCardWrapper product={product} />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/products">
                <button className="px-10 py-4 rounded-full font-bold text-gray-900

                                  bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200
                                  bg-[length:200%_auto] animate-silver
                                  
                                  border border-white/40
                                  
                                  shadow-[0_5px_20px_rgba(255,255,255,0.2)]
                                  hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)]
                                  
                                  transition-all duration-300
                                  transform hover:scale-105">
                  View All New Arrivals
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-200 mb-4">Shop by Category</h2>
              <p className="text-xl text-gray-200">Find exactly what you're looking for</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Men\'s Fashion', image: '/images/mens-fashion.PNG', link: '/mens' },
                { name: 'Women\'s Fashion', image: '/images/womens-fashion.PNG', link: '/womens' },
                { name: 'Kids Fashion', image: '/images/kids-fashion.PNG', link: '/kids' }
              ].map((category, index) => (
                <Link key={category.name} href={category.link}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="aspect-w-16 aspect-h-12 h-80">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80 group-hover:text-white transition-colors">Explore Collection →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-200 mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-200">Real reviews from real customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-800 text-white rounded-full mx-4 sm:mx-6 lg:mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
            <p className="text-xl mb-8 text-blue-100">Subscribe to get the latest fashion trends and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full ring-1 ring-white text-white focus:outline-none focus:ring-4 focus:ring-yellow-400 "
              />
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-colors transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        
        {/* Enhanced Features Section */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Why Choose BAKFiG?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Premium Quality</h3>
                <p className="text-white leading-relaxed">Curated selection of high-quality fashion items crafted with attention to detail and superior materials</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Elegant Design</h3>
                <p className="text-white leading-relaxed">Timeless designs that never go out of style, combining classic elegance with contemporary trends</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Fast Delivery</h3>
                <p className="text-white leading-relaxed">Quick and reliable shipping to your doorstep with real-time tracking and secure packaging</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
