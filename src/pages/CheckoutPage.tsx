import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { getProductById } from '../data/products';

type CheckoutStep = 'information' | 'shipping' | 'payment' | 'confirmation';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  useEffect(() => {
    document.title = "Checkout | ZEN Men's Wear";
    
    // Generate a random order ID
    const generateOrderId = () => {
      return `ZEN-${Math.floor(100000 + Math.random() * 900000)}`;
    };
    
    setOrderId(generateOrderId());
  }, []);
  
  if (cartItems.length === 0 && !orderComplete) {
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
  
  const nextStep = () => {
    if (currentStep === 'information') setCurrentStep('shipping');
    else if (currentStep === 'shipping') setCurrentStep('payment');
    else if (currentStep === 'payment') {
      setCurrentStep('confirmation');
      setOrderComplete(true);
      clearCart();
    }
  };
  
  const previousStep = () => {
    if (currentStep === 'shipping') setCurrentStep('information');
    else if (currentStep === 'payment') setCurrentStep('shipping');
  };
  
  if (orderComplete) {
    return (
      <div className="container-custom py-16 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center">
            <CheckCircle size={32} className="text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-montserrat mb-4">Order Complete!</h1>
        <p className="text-darkgrey mb-2">Thank you for your purchase.</p>
        <p className="text-darkgrey mb-8">Your order number is: <span className="font-medium">{orderId}</span></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
          {isAuthenticated && (
            <Link to="/account" className="btn btn-secondary">
              View Your Orders
            </Link>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold font-montserrat mb-8 text-center">Checkout</h1>
      
      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex justify-between">
          <div className={`flex-1 relative ${currentStep === 'information' ? 'text-black font-medium' : 'text-darkgrey'}`}>
            <div className="flex justify-center mb-2">
              <div className={`w-8 h-8 rounded-full ${currentStep === 'information' ? 'bg-black text-white' : 'bg-lightgrey text-darkgrey'} flex items-center justify-center`}>
                1
              </div>
            </div>
            <div className="text-center text-sm">Information</div>
            <div className="absolute w-full h-1 top-4 left-1/2 bg-lightgrey -z-10"></div>
          </div>
          <div className={`flex-1 relative ${currentStep === 'shipping' ? 'text-black font-medium' : 'text-darkgrey'}`}>
            <div className="flex justify-center mb-2">
              <div className={`w-8 h-8 rounded-full ${currentStep === 'shipping' ? 'bg-black text-white' : (currentStep === 'payment' || currentStep === 'confirmation' ? 'bg-black text-white' : 'bg-lightgrey text-darkgrey')} flex items-center justify-center`}>
                2
              </div>
            </div>
            <div className="text-center text-sm">Shipping</div>
            <div className="absolute w-full h-1 top-4 left-1/2 bg-lightgrey -z-10"></div>
          </div>
          <div className={`flex-1 relative ${currentStep === 'payment' ? 'text-black font-medium' : 'text-darkgrey'}`}>
            <div className="flex justify-center mb-2">
              <div className={`w-8 h-8 rounded-full ${currentStep === 'payment' ? 'bg-black text-white' : (currentStep === 'confirmation' ? 'bg-black text-white' : 'bg-lightgrey text-darkgrey')} flex items-center justify-center`}>
                3
              </div>
            </div>
            <div className="text-center text-sm">Payment</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Checkout Form */}
          <div className="mb-8">
            {currentStep === 'information' && (
              <div>
                <h2 className="text-xl font-medium mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      defaultValue={user?.email || ''}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="updates" className="mr-2" />
                    <label htmlFor="updates">Email me with news and offers</label>
                  </div>
                </div>
                
                <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="form-input"
                      defaultValue={user ? user.name.split(' ')[0] : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="form-input"
                      defaultValue={user && user.name.split(' ').length > 1 ? user.name.split(' ')[1] : ''}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block mb-1 font-medium">Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="form-input"
                      defaultValue={user && user.addresses.length > 0 ? user.addresses[0].street : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-1 font-medium">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      className="form-input"
                      defaultValue={user && user.addresses.length > 0 ? user.addresses[0].city : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-1 font-medium">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      className="form-input"
                      defaultValue={user && user.addresses.length > 0 ? user.addresses[0].state : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block mb-1 font-medium">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      className="form-input"
                      defaultValue={user && user.addresses.length > 0 ? user.addresses[0].zipCode : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block mb-1 font-medium">Country</label>
                    <select id="country" className="form-input">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                    <input type="tel" id="phone" className="form-input" />
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input type="checkbox" id="saveAddress" className="mr-2" />
                  <label htmlFor="saveAddress">Save this address for future orders</label>
                </div>
              </div>
            )}
            
            {currentStep === 'shipping' && (
              <div>
                <h2 className="text-xl font-medium mb-6">Shipping Method</h2>
                <div className="space-y-4 mb-8">
                  <label className="flex items-center justify-between p-4 border border-lightgrey">
                    <div className="flex items-center">
                      <input type="radio" name="shipping" className="mr-3" defaultChecked />
                      <span>Standard Shipping (3-5 business days)</span>
                    </div>
                    <span className="font-medium">Free</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border border-lightgrey">
                    <div className="flex items-center">
                      <input type="radio" name="shipping" className="mr-3" />
                      <span>Express Shipping (1-2 business days)</span>
                    </div>
                    <span className="font-medium">$15.00</span>
                  </label>
                </div>
              </div>
            )}
            
            {currentStep === 'payment' && (
              <div>
                <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                <div className="space-y-4 mb-8">
                  <div className="border border-lightgrey p-4">
                    <div className="flex items-center mb-4">
                      <input type="radio" name="payment" id="creditCard" className="mr-3" defaultChecked />
                      <label htmlFor="creditCard" className="font-medium">Credit Card</label>
                    </div>
                    
                    <div className="ml-6 space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block mb-1 font-medium">Card Number</label>
                        <input type="text" id="cardNumber" className="form-input" placeholder="**** **** **** ****" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiration" className="block mb-1 font-medium">Expiration (MM/YY)</label>
                          <input type="text" id="expiration" className="form-input" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block mb-1 font-medium">CVV</label>
                          <input type="text" id="cvv" className="form-input" placeholder="***" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block mb-1 font-medium">Name on Card</label>
                        <input type="text" id="cardName" className="form-input" />
                      </div>
                    </div>
                  </div>
                  
                  <label className="flex items-center border border-lightgrey p-4">
                    <input type="radio" name="payment" id="paypal" className="mr-3" />
                    <span className="font-medium">PayPal</span>
                  </label>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Billing Address</h3>
                  <div className="flex items-center mb-4">
                    <input type="checkbox" id="sameAsShipping" className="mr-2" defaultChecked />
                    <label htmlFor="sameAsShipping">Same as shipping address</label>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between">
              {currentStep !== 'information' ? (
                <button 
                  className="btn btn-secondary"
                  onClick={previousStep}
                >
                  Back
                </button>
              ) : (
                <Link to="/cart" className="btn btn-secondary">
                  Return to Cart
                </Link>
              )}
              
              <button
                className="btn btn-primary"
                onClick={nextStep}
              >
                {currentStep === 'payment' ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-offwhite p-6">
            <h2 className="text-xl font-bold font-montserrat mb-4">Order Summary</h2>
            
            <div className="max-h-80 overflow-y-auto mb-4 pr-2">
              {cartItems.map(item => {
                const product = getProductById(item.productId);
                if (!product) return null;
                
                const price = product.salePrice || product.price;
                
                return (
                  <div key={`${item.productId}-${item.size}`} className="flex gap-3 py-3 border-b border-lightgrey">
                    <div className="relative w-16 h-16 bg-white flex-shrink-0">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-darkgrey">
                        <span>Size: {item.size}</span> / <span>Color: {item.color}</span>
                      </div>
                    </div>
                    <div className="font-medium">
                      ${(price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="border-b border-lightgrey pb-4 mb-4">
              <div className="flex items-center mb-4">
                <input 
                  type="text" 
                  placeholder="Discount code" 
                  className="flex-1 px-4 py-2 border border-lightgrey focus:outline-none mr-2"
                />
                <button className="bg-black text-white px-4 py-2 font-medium">
                  Apply
                </button>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{currentStep === 'shipping' || currentStep === 'payment' ? 'Free' : 'Calculated at next step'}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-lightgrey pt-4 mb-4">
              <div className="flex justify-between text-xl">
                <span className="font-medium">Total</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;