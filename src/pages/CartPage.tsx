import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { getProductById } from '../data/products';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  useEffect(() => {
    document.title = "Shopping Cart | ZEN Men's Wear";
  }, []);
  
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold font-montserrat mb-4">Your Cart is Empty</h1>
        <p className="text-darkgrey mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold font-montserrat mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border-b border-lightgrey pb-2 mb-4 hidden sm:grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <span className="font-medium">Product</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="font-medium">Price</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="font-medium">Quantity</span>
            </div>
            <div className="col-span-2 text-right">
              <span className="font-medium">Total</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {cartItems.map(item => {
              const product = getProductById(item.productId);
              if (!product) return null;
              
              const price = product.salePrice || product.price;
              const itemTotal = price * item.quantity;
              
              return (
                <div key={`${item.productId}-${item.size}`} className="border-b border-lightgrey pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="sm:col-span-6 flex items-center gap-4">
                      <Link to={`/products/${product.id}`} className="w-20 h-24 bg-white flex-shrink-0">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </Link>
                      <div>
                        <Link to={`/products/${product.id}`} className="font-medium hover:text-darkgrey">
                          {product.name}
                        </Link>
                        <div className="text-sm text-darkgrey mt-1">
                          <div>Size: {item.size}</div>
                          <div>Color: {item.color}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="sm:col-span-2 text-center">
                      <span className="sm:hidden inline-block mr-2 font-medium">Price:</span>
                      ${price.toFixed(2)}
                    </div>
                    
                    {/* Quantity */}
                    <div className="sm:col-span-2 flex justify-center">
                      <div className="flex border border-lightgrey max-w-[120px]">
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-darkgrey hover:text-black"
                          onClick={() => updateQuantity(item.productId, item.size, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <div className="flex-1 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-darkgrey hover:text-black"
                          onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="sm:col-span-2 flex justify-between sm:justify-end items-center">
                      <span className="font-medium sm:hidden">Total:</span>
                      <div className="flex items-center">
                        <span className="font-medium">${itemTotal.toFixed(2)}</span>
                        <button 
                          className="ml-4 text-darkgrey hover:text-black"
                          onClick={() => removeFromCart(item.productId, item.size)}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex">
            <Link to="/products" className="inline-flex items-center text-darkgrey hover:text-black">
              <ArrowLeft size={18} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-offwhite p-6">
            <h2 className="text-xl font-bold font-montserrat mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-lightgrey pt-4 mb-6">
              <div className="flex justify-between text-xl">
                <span className="font-medium">Total</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="btn btn-primary w-full flex items-center justify-center"
            >
              <CreditCard size={18} className="mr-2" />
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;