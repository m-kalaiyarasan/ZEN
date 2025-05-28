import { useState } from 'react';
import { X } from 'lucide-react';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-black text-white py-2 relative">
      <div className="container-custom text-center text-sm">
        Free shipping on all orders over $100
      </div>
      <button 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => setIsVisible(false)}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Announcement;