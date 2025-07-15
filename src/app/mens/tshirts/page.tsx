import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function MensTShirtsPage() {
  const tshirts = products.filter((p) => p.category === 'mens-tshirts');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Men&apos;s T-Shirts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tshirts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 