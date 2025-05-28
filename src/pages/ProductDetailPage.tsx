import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Minus, Plus, ShoppingBag, ChevronRight, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { Size } from '../types';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const product = id ? getProductById(id) : null;
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ZEN Men's Wear`;
      setSelectedSize(null);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addToCart({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor
    });
  };
  
  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  return (
    <div>
      <div className="container-custom py-4 text-sm">
        <div className="flex items-center text-darkgrey">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/products" className="hover:text-black">Products</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-black">{product.name}</span>
        </div>
      </div>
      
      <div className="container-custom py-6 md:py-12">
        <Link to="/products" className="inline-flex items-center text-darkgrey hover:text-black mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`flex-shrink-0 w-20 h-24 ${selectedImage === index ? 'ring-2 ring-black' : 'opacity-70'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-semibold font-montserrat mb-2">{product.name}</h1>
            
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-xl font-medium">${product.salePrice.toFixed(2)}</span>
                  <span className="text-darkgrey line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-darkgrey mb-8">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`w-10 h-10 border ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : 'opacity-70'
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase(), 
                      border: color.toLowerCase() === 'white' ? '1px solid #e0e0e0' : 'none' 
                    }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Size</h3>
                <button className="text-sm underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 border text-base font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-lightgrey text-charcoal hover:border-darkgrey'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && <p className="text-error text-sm mt-2">Please select a size</p>}
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex border border-lightgrey w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center text-darkgrey hover:text-black"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <div className="flex-1 flex items-center justify-center font-medium">
                  {quantity}
                </div>
                <button 
                  className="w-10 h-10 flex items-center justify-center text-darkgrey hover:text-black"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="btn btn-primary flex-1 flex items-center justify-center"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
              <button
                className="btn btn-secondary flex items-center justify-center"
                onClick={toggleWishlist}
              >
                <Heart
                  size={18}
                  className="mr-2"
                  fill={isInWishlist(product.id) ? "currentColor" : "none"}
                />
                {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
            
            {/* Product Info */}
            <div className="border-t border-lightgrey pt-6">
              <div className="mb-4">
                <span className="font-medium">SKU:</span> {product.id}
              </div>
              <div className="mb-4">
                <span className="font-medium">Category:</span> {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
              <div>
                <span className="font-medium">Tags:</span> Men, Clothing, {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-offwhite">
          <div className="container-custom">
            <h2 className="text-2xl font-bold font-montserrat mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;