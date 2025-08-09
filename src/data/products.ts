export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  sizes: string[];
  category: string;
  isNew?: boolean;
  description?: string;
}

export const products: Product[] = [
  {
    id: 'mens-tshirt-1',
    name: 'Classic Men\'s T-Shirt',
    image: '/images/products/mens-tshirt-1.jpg',
    price: 1299,
    oldPrice: 1599,
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'mens-tshirts',
    isNew: true,
    description: 'Premium cotton t-shirt for men.'
  },
  {
    id: 'mens-hoodie-1',
    name: 'Men\'s Hoodie',
    image: '/images/products/mens-hoodie-1.jpg',
    price: 1999,
    sizes: ['M', 'L', 'XL'],
    category: 'mens-hoodies',
    isNew: true,
    description: 'Warm and stylish hoodie for men.'
  },
  {
    id: 'womens-tshirt-1',
    name: 'Women\'s Graphic Tee',
    image: '/images/products/womens-tshirt-1.jpg',
    price: 1399,
    oldPrice: 1799,
    sizes: ['S', 'M', 'L'],
    category: 'womens-tshirts',
    isNew: true,
    description: 'Trendy graphic t-shirt for women.'
  },
  {
    id: 'womens-hoodie-1',
    name: 'Women\'s Hoodie',
    image: '/images/products/womens-hoodie-1.jpg',
    price: 2099,
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'womens-hoodies',
    isNew: true,
    description: 'Cozy and fashionable hoodie for women.'
  },
  {
    id: 'kids-boys-1',
    name: 'Boys\' Party Shirt',
    image: '/images/products/kids-boys-1.jpg',
    price: 899,
    sizes: ['XS', 'S', 'M'],
    category: 'kids-boys',
    isNew: true,
    description: 'Smart party shirt for boys.'
  },
  {
    id: 'kids-girls-1',
    name: 'Girls\' Dress',
    image: '/images/products/kids-girls-1.jpg',
    price: 1199,
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'kids-girls',
    isNew: true,
    description: 'Beautiful dress for girls.'
  },
  {
    id: 'kids-party-1',
    name: 'Kids\' Party Wear',
    image: '/images/products/kids-party-1.jpg',
    price: 1499,
    sizes: ['S', 'M', 'L'],
    category: 'kids-party',
    isNew: true,
    description: 'Festive party wear for kids.'
  }
]; 