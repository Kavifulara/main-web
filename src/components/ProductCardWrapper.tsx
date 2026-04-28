"use client";

import ProductCard from "./ProductCard";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

// adjust this type if needed
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  category: string;
  
};

export default function ProductCardWrapper({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <ProductCard
      product={product}
      onAddToCart={(product, size) =>{
        console.log("ADDING:", product, size);

         if (!size) {
          toast.error("Please select a size");
          return;
        }
        
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: size,
          
        }, 1); // for quantity, can adjust as needed
      }}
    />
  );
}