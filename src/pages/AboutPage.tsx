import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to our store! We are passionate about delivering high-quality products
            and exceptional shopping experiences to our valued customers.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to provide outstanding products and service, we've grown
            from a small local shop to a trusted online destination for shoppers worldwide.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We strive to offer our customers the best selection of products at competitive
            prices, backed by outstanding customer service and a seamless shopping experience.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li className="mb-2">Quality and reliability in every product we offer</li>
            <li className="mb-2">Exceptional customer service and support</li>
            <li className="mb-2">Transparency and honesty in all our dealings</li>
            <li className="mb-2">Continuous improvement and innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;