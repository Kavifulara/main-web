"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { FilterProvider } from "@/context/FilterContext";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "@/context/WishlistContext";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/context/Themecontext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayout =
  pathname.startsWith("/onboarding") ||
  pathname.startsWith("/signin") ||
  pathname.startsWith("/signup") ||
  pathname.startsWith("/about") ||
  pathname.startsWith("/contact") ;

  const hideSidebar =
  pathname.startsWith("/profile") ||
  pathname.startsWith("/orders") ||
  pathname.startsWith("/cart") ||
  pathname.startsWith("/address") ||
  pathname.startsWith("/wishlist") ;

  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
          
            <div className="min-h-screen flex flex-col">
  
              {!hideLayout && !hideSidebar && (
                <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-72 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] shadow-lg z-40 flex-col">
                  <div className="p-4 border-b text-lg font-bold text-black dark:text-white">
                    Categories
                  </div>
                  <Sidebar />
                </aside>
              )}
  
              <div
                className={`flex-1 ${!hideLayout && !hideSidebar ? "lg:ml-72" : "ml-0"}`}
              >
                {/* ✅ Navbar */}
                {!hideLayout && <Navbar showSidebar={!hideSidebar} />}
              
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={10}
                  containerStyle={{
                    top: 20,
                    zIndex: 99999,
                  }}
                  toastOptions={{
                    duration: 2200,
                    style: {
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      background: "rgba(10,10,10,0.65)",
                      color: "#fff",
                      backdropFilter: "blur(20px)",
                      padding: "10px 16px",
                      boxShadow: "0 0 25px rgba(255,255,255,0.05)",
                    },
                    success: {
                      iconTheme: {
                        primary: "#22c55e",
                        secondary: "#000",
                      },
                    },
                    error: {
                      iconTheme: {
                        primary: "#ef4444",
                        secondary: "#000",
                      },
                    },
                  }}
                />
        
                <main className="flex-1 ">
                  {children}
                </main>
              </div>
            </div>
          
          </FilterProvider>
        </WishlistProvider>
      </CartProvider> 
    </ThemeProvider>
    
  );
}