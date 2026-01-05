"use client";
import { useState } from "react";
import { FaBook, FaSignOutAlt, FaSearch, FaCog, FaPlusCircle } from "react-icons/fa";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const booksData = Array(10).fill({
    id: "1",
    name: "Hibernate Core - 11th",
    type: "Educational",
    language: "English",
    availability: Math.random() > 0.2 ? "Available" : "Borrowed"
  });

  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      {/* Sidebar */}
      <div className="bg-[#1A1A2E] w-64 h-screen p-5 flex flex-col text-white fixed">
        <h2 className="text-2xl font-bold mb-6">Library</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 hover:text-gray-400">📂 Catalog</a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaBook /> Books</a>
        </nav>
        <div className="mt-auto">
          <a href="#" className="flex items-center gap-3 hover:text-red-400"><FaSignOutAlt /> Logout</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-green-900 p-4 rounded-lg">
          <h1 className="text-lg font-semibold">Nisal Gunasekara (Admin)</h1>
          <div className="flex items-center gap-3">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaPlusCircle /> Acquire
            </button>
            <input
              type="text"
              placeholder="Search by ID or Type"
              className="bg-gray-800 text-white p-2 rounded-lg w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="text-gray-400" />
          </div>
          <span className="text-sm">12:29 PM, Sep 03, 2023</span>
          <FaCog className="text-white text-xl cursor-pointer" />
        </div>

        {/* Books Table */}
        <div className="bg-white p-4 rounded-lg overflow-x-auto text-black">
          <h2 className="text-xl font-bold mb-4">Library Lane Books</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Language</th>
                <th className="p-3">Availability</th>
                <th className="p-3 text-center">Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {booksData
                .filter((book) => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((book, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-3">{book.id}</td>
                    <td className="p-3">{book.name}</td>
                    <td className="p-3">{book.type}</td>
                    <td className="p-3">{book.language}</td>
                    <td className={`p-3 ${book.availability === "Available" ? "text-green-600" : "text-red-500"}`}>
                      {book.availability}
                    </td>
                    <td className="p-3 text-center">
                      <input type="checkbox" className="w-5 h-5" disabled={book.availability === "Borrowed"} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Library;
