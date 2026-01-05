'use client'
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { BookText } from 'lucide-react';

const LibraryDashboard = () => {
  const [activeTab, setActiveTab] = useState('borrowed');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">

      {/* <div className="bg-gray-800 w-45 p-4 text-white">
        <h1 className="text-xl font-bold mb-4">Library System</h1>
        <ul>
          <li className="cursor-pointer hover:bg-gray-700 p-2 rounded mb-2">Dashboard</li>
          <li className="cursor-pointer hover:bg-gray-700 p-2 rounded mb-2 bg-white text-black font-semibold">Catalog</li>
          <li className="cursor-pointer hover:bg-gray-700 p-2 rounded mb-2">Books</li>
          <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Logout</li>
        </ul>
      </div> */}

      <div className="flex-1 p-8">
        {/* <div className="flex justify-between items-center mb-4 bg-green-500 rounded">
          <div className="text-2xl font-bold">Nisal Gunasekara</div>
          <div className="text-sm">
            <span>12:39 PM</span> | <span>Jan 02, 2025</span>
          </div>
        </div> */}

        <div className="flex justify-end mb-4">
          <input type="text" placeholder="Search by ID" className="border border-gray-300 rounded px-4 py-2" />
        </div>

        <div className="flex mb-4">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'borrowed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            // onClick={() => handleTabChange('borrowed')}
          >
            Borrowed Books
          </button>
          <button 
            className={`px-4 py-2 rounded-md ml-2 ${activeTab === 'returned' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
            // onClick={() => handleTabChange('returned')}
          >
            Returned Books
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-300">
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

            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">002 Books</td>
              <td className="border border-gray-300 p-2">13-03-2024</td>
              <td className="border border-gray-300 p-2">25-02-2024 10:39:43</td>
              <td className="border border-gray-300 p-2"><BookText/></td>
            </tr>

            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">002 Books</td>
              <td className="border border-gray-300 p-2">13-03-2024</td>
              <td className="border border-gray-300 p-2">25-02-2024 10:39:43</td>
              <td className="border border-gray-300 p-2"><BookText/></td>
            </tr>
            
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">002 Books</td>
              <td className="border border-gray-300 p-2">13-03-2024</td>
              <td className="border border-gray-300 p-2">25-02-2024 10:39:43</td>
              <td className="border border-gray-300 p-2"><BookText/>
              </td>
            </tr>
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryDashboard;