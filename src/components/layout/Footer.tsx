import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold font-montserrat mb-6">ZEN</h2>
            <p className="mb-6 text-lightgrey">Let's Wear Confidence</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-midgrey transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-midgrey transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-midgrey transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-midgrey transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-medium font-montserrat mb-6">Shop</h3>
            <ul className="space-y-3 text-lightgrey">
              <li>
                <Link to="/products?category=shirts" className="hover:text-white transition-colors">
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/products?category=t-shirts" className="hover:text-white transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/products?category=pants" className="hover:text-white transition-colors">
                  Pants
                </Link>
              </li>
          
              <li>
                <Link to="/products?category=sweaters" className="hover:text-white transition-colors">
                  Sweaters
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h3 className="text-lg font-medium font-montserrat mb-6">Help</h3>
            <ul className="space-y-3 text-lightgrey">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-medium font-montserrat mb-6">Newsletter</h3>
            <p className="text-lightgrey mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col sm:flex-row gap-2 mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-charcoal text-white px-4 py-3 flex-grow focus:outline-none"
              />
              <button type="submit" className="bg-white text-black px-6 py-3 font-medium hover:bg-lightgrey transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lightgrey text-sm">
            &copy; {new Date().getFullYear()} ZEN Men's Wear. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-lightgrey">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;