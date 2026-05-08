"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (acc: number, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-200">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* LEFT: Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-black ring-1 ring-white/100 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />

                <div className="ml-4 flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-200">₹{item.price}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-medium rounded-full px-2 py-1 ring-red-500 ring-1 hover:bg-red-500/10 transition "
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT: Summary */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-md h-fit sticky top-6">
            <h2 className="text-xl text-white font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span className="text-gray-200">Total</span>
              <span className="text-white">₹{total}</span>
            </div>

            <button className="w-full mt-4 rounded-lg py-2
                              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                              text-black font-semibold 
                              shadow-[0_0_15px_rgba(255,215,0,0.4)]
                              hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                              hover:scale-105 
                              transition-all duration-300">
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}