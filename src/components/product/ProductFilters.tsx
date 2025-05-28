import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const categories = [
  { id: 'shirts', name: 'Shirts' },
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'pants', name: 'Pants' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'sweaters', name: 'Sweaters' },
  { id: 'sweatshirts', name: 'Sweatshirts' },
  { id: 'tailored-trousers', name: 'Tailored Trousers' },
  { id: 'denim', name: 'Denim' },
  { id: 'linen-pants', name: 'Linen Pants' },
  { id: 'cargo-trousers', name: 'Cargo Trousers' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const priceRanges = [
  { id: '0-50', name: 'Under $50' },
  { id: '50-100', name: '$50 - $100' },
  { id: '100-150', name: '$100 - $150' },
  { id: '150-plus', name: 'Over $150' },
];

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterAccordion = ({ title, children, defaultOpen = true }: FilterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-lightgrey pb-4">
      <button 
        className="flex items-center justify-between w-full py-4 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="py-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface ProductFiltersProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  selectedPriceRange: string | null;
  setSelectedPriceRange: (range: string | null) => void;
  isMobileFiltersOpen: boolean;
  setIsMobileFiltersOpen: (isOpen: boolean) => void;
}

const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedSizes,
  setSelectedSizes,
  selectedPriceRange,
  setSelectedPriceRange,
  isMobileFiltersOpen,
  setIsMobileFiltersOpen
}: ProductFiltersProps) => {
  
  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };
  
  const handlePriceRangeChange = (rangeId: string) => {
    if (selectedPriceRange === rangeId) {
      setSelectedPriceRange(null);
    } else {
      setSelectedPriceRange(rangeId);
    }
  };
  
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSizes([]);
    setSelectedPriceRange(null);
  };
  
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedSizes.length) count++;
    if (selectedPriceRange) count++;
    return count;
  };
  
  const activeFiltersCount = getActiveFiltersCount();
  
  const mobileFilterClasses = isMobileFiltersOpen
    ? 'fixed inset-0 z-50 bg-white flex flex-col transform translate-x-0 transition-transform duration-300'
    : 'fixed inset-0 z-50 bg-white flex flex-col transform translate-x-full transition-transform duration-300';
  
  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block w-full max-w-xs">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Filters</h2>
          {activeFiltersCount > 0 && (
            <button 
              className="text-sm text-darkgrey hover:text-black underline"
              onClick={clearAllFilters}
            >
              Clear all
            </button>
          )}
        </div>
        
        <div className="space-y-1">
          <FilterAccordion title="Category">
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category.id} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    className="form-checkbox h-4 w-4 mr-3 border-gray-300 rounded"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <span className="text-sm">{category.name}</span>
                </label>
              ))}
            </div>
          </FilterAccordion>
          
          <FilterAccordion title="Size">
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-3 py-2 border text-sm font-medium transition-colors ${
                    selectedSizes.includes(size)
                      ? 'border-black bg-black text-white'
                      : 'border-lightgrey text-charcoal hover:border-darkgrey'
                  }`}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterAccordion>
          
          <FilterAccordion title="Price">
            <div className="space-y-2">
              {priceRanges.map(range => (
                <label key={range.id} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    className="form-checkbox h-4 w-4 mr-3 border-gray-300 rounded"
                    checked={selectedPriceRange === range.id}
                    onChange={() => handlePriceRangeChange(range.id)}
                  />
                  <span className="text-sm">{range.name}</span>
                </label>
              ))}
            </div>
          </FilterAccordion>
        </div>
      </div>
      
      {/* Mobile Filter Button */}
      <div className="md:hidden">
        <button 
          className="flex items-center py-2 px-4 border border-lightgrey focus:outline-none"
          onClick={() => setIsMobileFiltersOpen(true)}
        >
          <span className="mr-2">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>
      
      {/* Mobile Filters Drawer */}
      <div className={mobileFilterClasses}>
        <div className="p-4 border-b border-lightgrey">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Filters</h2>
            <button 
              className="p-1"
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="overflow-y-auto flex-grow p-4">
          <FilterAccordion title="Category">
            <div className="space-y-3">
              {categories.map(category => (
                <label key={category.id} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    className="form-checkbox h-5 w-5 mr-3 border-gray-300 rounded"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </FilterAccordion>
          
          <FilterAccordion title="Size">
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 border text-base font-medium transition-colors ${
                    selectedSizes.includes(size)
                      ? 'border-black bg-black text-white'
                      : 'border-lightgrey text-charcoal hover:border-darkgrey'
                  }`}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterAccordion>
          
          <FilterAccordion title="Price">
            <div className="space-y-3">
              {priceRanges.map(range => (
                <label key={range.id} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    className="form-checkbox h-5 w-5 mr-3 border-gray-300 rounded"
                    checked={selectedPriceRange === range.id}
                    onChange={() => handlePriceRangeChange(range.id)}
                  />
                  <span>{range.name}</span>
                </label>
              ))}
            </div>
          </FilterAccordion>
        </div>
        
        <div className="p-4 border-t border-lightgrey">
          <div className="grid grid-cols-2 gap-4">
            <button 
              className="py-3 border border-black text-black font-medium"
              onClick={clearAllFilters}
            >
              Clear All
            </button>
            <button 
              className="py-3 bg-black text-white font-medium"
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;