export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: ProductCategory;
  images: string[];
  description: string;
  sizes: Size[];
  colors: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  stock: number;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type ProductCategory = 
  | 'shirts' 
  | 't-shirts' 
  | 'pants' 
  | 'hoodies' 
  | 'sweaters' 
  | 'sweatshirts' 
  | 'tailored-trousers' 
  | 'denim' 
  | 'linen-pants' 
  | 'cargo-trousers';

export interface CartItem {
  productId: string;
  quantity: number;
  size: Size;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}