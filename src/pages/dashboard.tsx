import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Chat Interface</h2>
          <div className="border rounded-lg p-4 h-64 overflow-y-auto">
            {/* Chat messages will appear here */}
          </div>
        </div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type your message..." />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mt-4">
          Send
        </button>
      </div>
    </div>
  );
};

export default DashboardPage; 