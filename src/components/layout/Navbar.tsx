import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-offwhite py-5'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-montserrat">
            ZEN
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6 text-darkgrey">
            <li>
              <NavLink to="/" className={({ isActive }) => 
                `nav-link ${isActive ? 'text-black font-medium' : ''}`
              }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => 
                `nav-link ${isActive ? 'text-black font-medium' : ''}`
              }>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => 
                `nav-link ${isActive ? 'text-black font-medium' : ''}`
              }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => 
                `nav-link ${isActive ? 'text-black font-medium' : ''}`
              }>
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-darkgrey hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <Link to={isAuthenticated ? "/account" : "/login"} className="p-2 text-darkgrey hover:text-black transition-colors">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="p-2 text-darkgrey hover:text-black transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="p-2 text-darkgrey hover:text-black transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden p-2 text-darkgrey hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="container-custom py-5">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-bold font-montserrat" onClick={closeMenu}>
              ZEN
            </Link>
            <button 
              className="p-2 text-darkgrey hover:text-black transition-colors"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>
          
          <ul className="flex flex-col space-y-6 text-lg">
            <li>
              <NavLink to="/" className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-black font-medium' : 'text-darkgrey'}`
              }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-black font-medium' : 'text-darkgrey'}`
              }>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-black font-medium' : 'text-darkgrey'}`
              }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-black font-medium' : 'text-darkgrey'}`
              }>
                Contact
              </NavLink>
            </li>
          </ul>
          
          <div className="mt-auto pt-8 border-t border-lightgrey mt-8">
            <div className="flex space-x-4">
              <Link to={isAuthenticated ? "/account" : "/login"} 
                className="flex items-center py-2 text-darkgrey" 
                onClick={closeMenu}
              >
                <User size={20} className="mr-2" />
                <span>{isAuthenticated ? "My Account" : "Login / Register"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;