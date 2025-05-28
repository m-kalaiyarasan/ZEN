import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | ZEN Men's Wear";
  }, []);

  return (
    <div className="container-custom py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold font-montserrat mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
      <p className="text-darkgrey mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
        <Link to="/products" className="btn btn-secondary">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;