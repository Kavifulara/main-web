"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 🧠 Define Product Type
type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

// 🧠 Context Type
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">, qty?: number) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

// Provider Props
type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, "quantity">, qty: number = 1) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id && item.size === product.size);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};