import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product, Size } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0]
    });
  };
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="product-card-img"
          />
          {product.salePrice && (
            <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-medium">
              SALE
            </div>
          )}
          
          <div className="product-card-actions">
            <button 
              onClick={toggleWishlist}
              className="w-9 h-9 bg-white flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors"
            >
              <Heart 
                size={18} 
                fill={isInWishlist(product.id) ? "currentColor" : "none"} 
              />
            </button>
          </div>
          
          <button 
            className="product-quick-add"
            onClick={handleQuickAdd}
          >
            Quick Add
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-charcoal">{product.name}</h3>
          <div className="mt-1">
            {product.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-darkgrey line-through">${product.price.toFixed(2)}</span>
                <span className="font-medium">${product.salePrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;