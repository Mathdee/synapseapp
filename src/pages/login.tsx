import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Login with Google
      </button>
      <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 mt-4">
        Login with Email
      </button>
    </div>
  );
};

export default LoginPage; 