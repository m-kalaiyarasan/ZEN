import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { getFeaturedProducts, getNewArrivals } from '../data/products';

const HomePage = () => {
  useEffect(() => {
    document.title = "ZEN Men's Wear - Let's Wear Confidence";
  }, []);

  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center bg-[url('/src/banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
       <div className="container-custom relative z-10 text-white bg-black/15 shadow-lg p-6 rounded-xl mt-40 flex flex-col items-center text-center ">
          <h1 className="text-2xl md:text-6xl font-bold font-montserrat mb-4">Let's Wear Confidence</h1>
          <p className="text-xl max-w-lg mb-8">Elevate your style with our premium collection of men's essentials.</p>
          <div className="flex flex-wrap gap-4 ">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn-secondary text-white border-white hover:bg-white hover:text-black">
              Our Story
            </Link>
          </div>
        </div>
      </section>
      
      {/* Collections Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link to="/products?category=shirts" className="relative overflow-hidden group h-[400px]">
              <img 
                src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Shirts"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-1">Shirts</h3>
                  <p className="mb-2 opacity-90">Timeless classics</p>
                  <span className="inline-flex items-center font-medium">
                    Shop Now <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=t-shirts" className="relative overflow-hidden group h-[400px]">
              <img 
                src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="T-Shirts"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-1">T-Shirts</h3>
                  <p className="mb-2 opacity-90">Everyday essentials</p>
                  <span className="inline-flex items-center font-medium">
                    Shop Now <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            
            <Link to="/products?category=denim" className="relative overflow-hidden group h-[400px]">
              <img 
                src="https://images.pexels.com/photos/4937229/pexels-photo-4937229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Denim"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-1">Denim</h3>
                  <p className="mb-2 opacity-90">Timeless style</p>
                  <span className="inline-flex items-center font-medium">
                    Shop Now <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat">Featured Products</h2>
            <Link to="/products" className="inline-flex items-center text-charcoal hover:text-black font-medium">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat">New Arrivals</h2>
            <Link to="/products" className="inline-flex items-center text-charcoal hover:text-black font-medium">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <ProductGrid products={newArrivals} columns={4} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Let's Wear Confidence</h2>
          <p className="text-xl mb-8 opacity-80">Subscribe to our newsletter for exclusive offers and style updates.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white bg-opacity-10 text-white flex-grow px-4 py-3 focus:outline-none placeholder-white placeholder-opacity-60"
            />
            <button type="submit" className="bg-white text-black px-6 py-3 font-medium hover:bg-lightgrey transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;