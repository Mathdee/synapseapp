import React from 'react';

const AccountPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Account</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Your Plan</h2>
          <p className="text-gray-700">Pro Plan</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Usage</h2>
          <p className="text-gray-700">Unlimited sessions</p>
        </div>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 mt-4">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
};

export default AccountPage; 