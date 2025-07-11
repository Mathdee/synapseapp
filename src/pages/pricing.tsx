import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Starter Plan</h2>
          <p className="text-gray-700">$19.99/month</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Pro Plan</h2>
          <p className="text-gray-700">$49.99/month</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 