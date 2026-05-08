"use client";

import Link from 'next/link';
import Logo from './Logo';
import Sidebar from './Sidebar';
import { useEffect, useState } from "react";
import app from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product, products } from '@/data/products';
import ProductSearch from '@/components/ProductSearch';
import { useWishlist } from "@/context/WishlistContext";
import { Heart } from "lucide-react";
import { useRef } from "react";

type Props = {
  products: Product[];
};

export default function Navbar({ showSidebar }: { showSidebar: boolean }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);
  const [open, setOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const handleSearchResults = (results: Product[]) => {
      setFilteredProducts(results);
    }

  const router = useRouter();

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const { wishlist } = useWishlist();

  
  
  const handleLogout = async() => {
    const auth = getAuth(app);
    await signOut(auth);
    localStorage.removeItem("isLoggedIn");
    setOpen(false);
    router.push("/");
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = getAuth();
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false); // 👈 close dropdown
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Mobile Overlay and Drawer */}
      {sidebarOpen && (
        <>
          {/* Mobile Overlay - only visible on mobile */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden"
            onClick={handleSidebarClose}
          />
          {/* Mobile Drawer - only visible on mobile */}
          <aside className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-darkCard shadow-lg z-50 transition-transform duration-300 flex flex-col lg:hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold">Categories</span>
              <button
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={handleSidebarClose}
                aria-label="Close sidebar"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </aside>
        </>
      )}

      <nav className="relative bg-[rgba(20,20,20,0.65)] backdrop-blur-xl text-gray-200 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]  border-b sticky top-0 z-10">
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center h-16 gap-6 w-full ${showSidebar ? "" : "justify-between" }`}>
            {/* Hamburger Menu - Only visible on mobile */}
            <button
              className="mr-2 flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open categories menu"
            >
              <span className="sr-only">Open categories menu</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="28" height="2.5" rx="1.25" fill="#222" />
                <rect y="13" width="28" height="2.5" rx="1.25" fill="#222" />
                <rect y="20" width="28" height="2.5" rx="1.25" fill="#222" />
              </svg>
            </button>

            {/* Left side - Logo */}
            <div className={`${showSidebar ? "" : "flex-1"}`}>
              <Logo />
            </div>

            {/* Center - Search Bar */}
            
              <div className={`${showSidebar ? "" : "flex-1 flex justify-center"}`}>
                <ProductSearch 
                  products={products}
                  filteredProducts={filteredProducts} 
                  setFiltered={handleSearchResults} 
                />
              </div>

            <div className="flex items-center space-x-6 ml-auto">

              {/* Wishlist Icon */}
              <Link href="/wishlist" className="relative">
                <Heart className="w-6 h-6 text-white transition-transform duration-200 hover:scale-110" />

              
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <Link href="/cart" id="cart-icon" className="relative">
                <span className="text-2xl">🛒</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-xs font-semibold px-2 py-0.5 rounded-full text-white ">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Sign In Button */}
              {!user && (
                <Link
                  href="/signin"
                  className=" px-4 py-2 rounded-lg 
                              bg-yellow-400/10 border border-yellow-400/30 
                              text-yellow-300 backdrop-blur-md
                              hover:bg-yellow-400/20 
                              hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]
                              transition-all duration-300 "
                >
                  Sign In
                </Link>
              )}

              {user ? (
              <div className="relative cursor-pointer text-white">
                <button onClick={() => setOpen(!open)}>
                  Hi, {user.displayName || user.email?.split("@")[0] } 👋
                </button>

                {open && (
                

                  <div 
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur-lg border border-white/50 rounded-xl shadow-xl p-2 z-50 border">
                    
                    <p className="p-2 hover:bg-gray-300 cursor-pointer text-white hover:rounded-full rounded-full hover:text-black transition-all duration-200">
                      <button
                        onClick={() => {
                          router.push("/profile");
                          setOpen(false);
                        }}
                        className="w-full text-left"
                      >
                        Profile
                      </button>
                    </p>
                    <p className="p-2 hover:bg-gray-300 cursor-pointer text-white hover:rounded-full rounded-full hover:text-black transition-all duration-200">
                      <button
                        onClick={() => {
                          router.push("/address");
                          setOpen(false);
                        }}
                        className="w-full text-left"
                      >
                        Address
                      </button>
                    </p>
                    <p className="p-2 hover:bg-gray-300 cursor-pointer text-white hover:rounded-full rounded-full hover:text-black transition-all duration-200">
                      Your Orders
                    </p>
                    <p
                      className="p-2 hover:bg-gray-200 cursor-pointer text-red-300 hover:rounded-full rounded-full hover:text-red-500 transition-all duration-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                
                
                )}
              </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
