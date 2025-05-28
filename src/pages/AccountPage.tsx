import React from 'react';

const AccountPage = () => {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>
      <div className="bg-white p-8 shadow-sm">
        <p className="text-lg mb-4">Welcome to your account dashboard</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Account Details</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Name: John Doe</p>
              <p className="text-gray-600">Email: john@example.com</p>
            </div>
            <button className="btn btn-secondary">Edit Profile</button>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Recent Orders</h2>
            <p className="text-gray-600">No orders found</p>
            <button className="btn btn-primary">Browse Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;