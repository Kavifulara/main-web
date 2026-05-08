"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();


  return (
    <div className="min-h-screen text-gray-200 p-6 relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505]">
      
      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl animate-float-slow top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl animate-float-slow bottom-[-200px] right-[-200px]" />
      </div>
    
      {/* Light sweep */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent animate-ambient opacity-[0.03]" />
      </div>
    
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/images/noise.png')]" />

      {wishlist.length === 0 ? (
        <h2 className="text-center mt-10 text-xl">
          Your wishlist is empty 💔
        </h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-lg"
            >
              <img
                src={item.image}
                className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
    
              <h3 className="mt-2 font-semibold">{item.name}</h3>
    
              <p className="text-gray-400 ">
                ₹{item.price}
              </p>
    
              <button
                onClick={() => {
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    size: "M",
                  }, 1);
                  removeFromWishlist(item.id);
                }}
                className="mt-3 w-full py-2 rounded-lg transition-all duration-300
                          bg-white/10 backdrop-blur-md border border-white/20
                          hover:bg-white/20"
              >
                Move to Cart 🛒
              </button>
    
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 w-full py-2 rounded-lg transition-all duration-300
                border border-red-500/70 text-red-400 hover:bg-red-500 hover:text-white"
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
  </div>
  );
}
    

      