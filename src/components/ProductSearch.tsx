"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Product, } from '@/data/products';
import { useRouter } from "next/navigation";
import { Mic } from "lucide-react";
import useVoiceSearch from "@/hooks/useVoiceSearch";


type Props = {
  products: Product[];
  filteredProducts: Product[];
  setFiltered: (products: Product[]) => void;
};

export default function ProductSearch({ products, filteredProducts, setFiltered }: Props) {
  const [query, setQuery] = useState<string>("");

  const router = useRouter();

  const handleSearch = (value: string) => {
    setQuery(value);
  
    const q = value.toLowerCase().trim();
  
    if (!q) {
      setFiltered(products);
      return;
    }

    router.push(`/search?q=${encodeURIComponent(value)}`);

  
    // Remove useless words 
    const stopWords = ["show", "me", "i", "want", "need", "a", "the", "under"];
    const words = q
      .split(" ")
      .filter((word) => !stopWords.includes(word) && isNaN(Number(word)));
  
    // Extract price 
    const priceMatch = q.match(/under (\d+)/);
    const maxPrice = priceMatch ? parseInt(priceMatch[1]) : null;
  
    // Detect color
    const colors = ["black", "white", "red", "blue", "green"];
    const detectedColor = colors.find((c) => q.includes(c));
  
    const filtered = products.filter((product) => {
      const name = product.name.toLowerCase();
      const category = product.category?.toLowerCase() || "";
      const description = product.description?.toLowerCase() || "";
  
      // Smart word matching 
      const wordMatch =
        words.length === 0 ||
        words.some(
          (word) =>
            name.includes(word) ||
            category.includes(word) ||
            description.includes(word)
        );
  
      // Color match 
      const colorMatch = detectedColor
        ? name.includes(detectedColor)
        : true;
  
      // Price condition (
      const priceCondition =
        maxPrice !== null ? product.price <= maxPrice : true;
  
      return wordMatch && colorMatch && priceCondition;
    });
  
    setFiltered(filtered);
  };
  

  // 🎤 Voice hook integration
  const { listening, startListening } = useVoiceSearch(
    setQuery,
    handleSearch
  );

  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="relative group w-[90%] md:w-[500px] ">
        <div className="absolute -inset-[1px] rounded-2xl 
                        bg-gradient-to-r from-yellow-400/40 via-transparent to-yellow-400/40 
                        opacity-0 group-focus-within:opacity-100 blur-md 
                        transition-all duration-300" />
        
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              router.push(`/search?q=${encodeURIComponent(query)}`);
            }
          }}
          className="w-full pl-12 pr-12 py-3 rounded-2xl 
          bg-[rgba(255,255,255,0.05)] text-gray-200
          backdrop-blur-xl border border-white/30
          shadow-[0_0_20px_rgba(255,255,255,0.05)]
          
          focus:outline-none 
          focus:border-white/100
          focus:shadow-[0_0_25px_rgba(255,215,0,0.25)]
          
          placeholder:text-gray-400
          transition-all duration-300"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
  
          {/* Pulse Rings */}
          {listening && (
            <>
              <span className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping"></span>
              <span className="absolute inset-0 rounded-full bg-red-300 opacity-50 animate-ping delay-200"></span>
            </>
          )}
        
          {/* mic Button */}
          <button
            onClick={startListening}
            className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 overflow-hidden
            ${
              listening
                ? "bg-gradient-to-br from-red-500 to-pink-500 shadow-[0_0_25px_rgba(255,0,100,0.6)]"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {!listening ? (
              <Mic size={18} />
            ) : (
              <div className="flex items-end gap-[2px] h-4">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className="w-[2px] bg-white rounded-full animate-[wave_1s_ease-in-out_infinite]"
                    style={{
                      height: `${8 + i * 3}px`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </button>
        </div>

        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-300 transition" size={20} />
      

        {query && (
          <div className="absolute left-0 right-0 mt-3 bg-[rgba(20,20,20,0.9)] backdrop-blur-xl 
                          border border-white/10 
                          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                          rounded-2xl max-h-60 overflow-y-auto z-50">
        
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 5).map((p) => (
                <div
                  key={p.id}
                  className="p-3 hover:bg-white/10 cursor-pointer text-gray-200 transition"
                  onClick={() => {
                    setQuery(p.name);
                    setFiltered([p]);
        
                    router.push(`/product/${p.id}`);
                    setQuery("");
                  }}
                >
                  {p.name}
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p className="font-semibold text-black">No results found</p>
                <p className="text-sm mt-1">Try searching something else</p>
        
                <div className="mt-3 text-sm">
                  <p className="text-gray-400">You might like:</p>
        
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {["hoodie", "t shirt", "jeans", "black shirt"].map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSearch(s)}
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 text-black"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}