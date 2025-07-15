import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function WomensHoodiesPage() {
  const hoodies = products.filter((p) => p.category === 'womens-hoodies');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Women&apos;s Hoodies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hoodies.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 