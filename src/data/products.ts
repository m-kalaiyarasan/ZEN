import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Oxford Shirt',
    price: 89.99,
    category: 'shirts',
    images: [
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Classic oxford shirt crafted from premium cotton with a comfortable slim fit. Perfect for formal occasions or business casual settings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Black'],
    isFeatured: true,
    stock: 25
  },
  {
    id: '2',
    name: 'Relaxed Fit T-Shirt',
    price: 39.99,
    category: 't-shirts',
    images: [
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Minimalist essential t-shirt with a relaxed fit made from organic cotton. Features a clean design and comfortable feel for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey'],
    isNewArrival: true,
    stock: 50
  },
  {
    id: '3',
    name: 'Slim Fit Chino Pants',
    price: 79.99,
    category: 'pants',
    images: [
      'https://images.pexels.com/photos/11989716/pexels-photo-11989716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6824588/pexels-photo-6824588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Versatile slim fit chino pants crafted from stretch cotton twill. A perfect balance of comfort and style for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'Navy', 'Olive'],
    isFeatured: true,
    stock: 30
  },
  {
    id: '4',
    name: 'Minimalist Hoodie',
    price: 69.99,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311470/pexels-photo-6311470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Modern minimalist hoodie made from premium cotton blend with a comfortable oversized fit and subtle logo detail.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Cream'],
    isNewArrival: true,
    stock: 40
  },
  {
    id: '5',
    name: 'Premium Wool Sweater',
    price: 119.99,
    category: 'sweaters',
    images: [
      'https://images.pexels.com/photos/6046226/pexels-photo-6046226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6046184/pexels-photo-6046184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Luxurious wool sweater with a timeless design and comfortable fit. Perfect for colder weather and can be dressed up or down.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Navy'],
    isFeatured: true,
    stock: 20
  },
  {
    id: '6',
    name: 'Heavyweight Sweatshirt',
    price: 59.99,
    category: 'sweatshirts',
    images: [
      'https://images.pexels.com/photos/9558598/pexels-photo-9558598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5945684/pexels-photo-5945684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Premium heavyweight sweatshirt with a clean, minimal design. Made from brushed cotton-blend fabric for ultimate comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Off-white'],
    isNewArrival: true,
    stock: 35
  },
  {
    id: '7',
    name: 'Tailored Slim Trousers',
    price: 99.99,
    category: 'tailored-trousers',
    images: [
      'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Elegantly tailored slim-fit trousers crafted from premium wool blend. Features a clean silhouette and sophisticated finish.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey'],
    isFeatured: true,
    stock: 25
  },
  {
    id: '8',
    name: 'Selvedge Denim Jeans',
    price: 129.99,
    category: 'denim',
    images: [
      'https://images.pexels.com/photos/4937229/pexels-photo-4937229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Premium selvedge denim jeans with a modern slim fit. Meticulously crafted from high-quality Japanese denim for exceptional durability and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Indigo', 'Black', 'Washed Blue'],
    isNewArrival: true,
    stock: 20
  },
  {
    id: '9',
    name: 'Pure Linen Pants',
    price: 89.99,
    salePrice: 69.99,
    category: 'linen-pants',
    images: [
      'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Breathable pure linen pants with a relaxed silhouette. Perfect for warm weather and casual sophistication.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Natural', 'Black', 'Navy'],
    isFeatured: false,
    stock: 15
  },
  {
    id: '10',
    name: 'Utility Cargo Trousers',
    price: 109.99,
    category: 'cargo-trousers',
    images: [
      'https://images.pexels.com/photos/10043529/pexels-photo-10043529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Modern utility cargo trousers with a tapered fit. Features functional pockets and durable construction with a contemporary silhouette.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Olive', 'Tan'],
    isNewArrival: true,
    stock: 30
  },
  {
    id: '11',
    name: 'Merino Wool Cardigan',
    price: 149.99,
    category: 'sweaters',
    images: [
      'https://images.pexels.com/photos/6764037/pexels-photo-6764037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Luxurious merino wool cardigan with a clean, minimal design. Features ribbed details and premium horn buttons.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Black'],
    isFeatured: true,
    stock: 15
  },
  {
    id: '12',
    name: 'Linen-Blend Shirt',
    price: 79.99,
    category: 'shirts',
    images: [
      'https://images.pexels.com/photos/7691225/pexels-photo-7691225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7691120/pexels-photo-7691120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Breathable linen-blend shirt with a relaxed fit. Perfect for warm weather with a natural, effortless appeal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Natural', 'Sage'],
    isNewArrival: true,
    stock: 25
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};