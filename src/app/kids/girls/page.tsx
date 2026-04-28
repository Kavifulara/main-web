import { products } from '@/data/products';
import ProductCardWrapper from "@/components/ProductCardWrapper";


export default function KidsGirlsPage() {
  const girls = products.filter((p) => p.category === 'kids-girls');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Girls&apos; Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="ml-64"></div>  {/* helps to set a margin from the fixed sidebar */}
        {girls.map((product) => (
          <ProductCardWrapper key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 