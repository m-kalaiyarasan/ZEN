import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';
import { products } from '../data/products';
import { ChevronDown } from 'lucide-react';
import { Product } from '../types';

const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('default');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  useEffect(() => {
    document.title = "Shop Men's Clothing | ZEN Men's Wear";
  }, []);
  
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
  
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        selectedSizes.some(size => product.sizes.includes(size as any))
      );
    }
    
    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = product.salePrice || product.price;
        if (max === 0) return false;
        if (min === 0 && max === 50) return price < 50;
        if (min === 50 && max === 100) return price >= 50 && price < 100;
        if (min === 100 && max === 150) return price >= 100 && price < 150;
        if (min === 150 && max === undefined) return price >= 150;
        return true;
      });
    }
    
    // Sort products
    switch (sortOption) {
      case 'price-low-high':
        filtered.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high-low':
        filtered.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'name-a-z':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSizes, selectedPriceRange, sortOption]);
  
  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold font-montserrat mb-8">Shop Men's Clothing</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <ProductFilters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            isMobileFiltersOpen={isMobileFiltersOpen}
            setIsMobileFiltersOpen={setIsMobileFiltersOpen}
          />
          
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-darkgrey">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="relative">
                <select
                  className="appearance-none pl-4 pr-10 py-2 border border-lightgrey bg-white cursor-pointer focus:outline-none"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-darkgrey mb-6">Try changing your filters or browse our categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;