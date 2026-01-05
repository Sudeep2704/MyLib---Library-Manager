'use client'
import React, { useState } from 'react';
import Returned from '@/app/Returned/page';
import dynamic from 'next/dynamic';

// Dynamically import Borrowed to avoid SSR issues
const Borrowed = dynamic(() => import('@/app/borrowed/page'), { ssr: false });

const LibraryDashboard = () => {
  const [returned, setReturned] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8">
        <div className="flex justify-end mb-4">
          <input 
            type="text" 
            placeholder="Search by ID" 
            className="border border-gray-300 rounded px-4 py-2" 
          />
        </div>

        <div className="flex mb-4">
          <button className="px-4 py-2 rounded-md bg-gray-200 text-black">
            Borrowed Books
          </button>
          <button 
            onClick={() => setReturned(true)}
            className="px-4 py-2 rounded-md ml-2 bg-blue-500 text-white"
          >
            Returned Books
          </button>
        </div>

        {/* Conditionally render Borrowed or Returned component */}
        {returned ? <Returned /> : <Borrowed />}

        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">User ID</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Due Date</th>
              <th className="border border-gray-300 p-2">Date & Time</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id) => (
              <tr key={id}>
                <td className="border border-gray-300 p-2">{id}</td>
                <td className="border border-gray-300 p-2">1</td>
                <td className="border border-gray-300 p-2">002 Books</td>
                <td className="border border-gray-300 p-2">13-03-2024</td>
                <td className="border border-gray-300 p-2">25-02-2024 10:39:43</td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Return</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryDashboard;
