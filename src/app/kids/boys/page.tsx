import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function KidsBoysPage() {
  const boys = products.filter((p) => p.category === 'kids-boys');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Boys&apos; Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boys.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 