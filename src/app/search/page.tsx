"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  const params = useSearchParams();
  const rawQuery = params.get("q") || "";

  const query = rawQuery.toLowerCase().trim();

  // 🧠 Stop words (for voice input)
  const stopWords = ["show", "me", "i", "want", "need", "a", "the"];

  const words = query
    .split(" ")
    .filter((word) => !stopWords.includes(word));

  // 🧠 Price extraction (e.g. "under 1000")
  const priceMatch = query.match(/under (\d+)/);
  const maxPrice = priceMatch ? parseInt(priceMatch[1]) : null;

  // 🧠 Color detection (optional)
  const colors = ["black", "white", "red", "blue", "green"];
  const detectedColor = colors.find((c) => query.includes(c));

  const filtered = products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category?.toLowerCase() || "";
    const description = product.description?.toLowerCase() || "";

    const wordMatch = words.every(
      (word) =>
        name.includes(word) ||
        category.includes(word) ||
        description.includes(word)
    );

    const colorMatch = detectedColor
      ? name.includes(detectedColor)
      : true;

    const priceCondition =
      maxPrice !== null ? product.price <= maxPrice : true;

    return wordMatch && colorMatch && priceCondition;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] p-6">
      
      {/* 🔍 Heading */}
      <h2 className="text-white text-2xl mb-6">
        Results for "{rawQuery}"
      </h2>

      {/* ✅ Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-400">
          
          {/* ❌ No results */}
          <p className="text-xl text-white">No results found</p>
          <p className="mt-2 text-sm">
            Try different keywords or check spelling
          </p>

          {/* 🔥 Suggestions */}
          <div className="mt-6">
            <p className="text-gray-500 mb-3">You might like:</p>

            <div className="flex flex-wrap justify-center gap-3">
              {["hoodie", "t shirt", "jeans", "black shirt"].map((s) => (
                <a
                  key={s}
                  href={`/search?q=${s}`}
                  className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white text-sm transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}