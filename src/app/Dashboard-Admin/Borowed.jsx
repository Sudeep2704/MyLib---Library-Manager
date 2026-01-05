"use client";
import { useState } from "react";
import { FaBook, FaUsers, FaSignOutAlt, FaSearch, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("borrowed");

  const tableData = Array(10).fill({
    id: "001",
    userId: "001",
    amount: "002 Books",
    dueDate: "13-03-2024",
    dateTime: "25-02-2024 10:39:43"
  });

  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      {/* Sidebar */}
      <div className="bg-[#1A1A2E] w-64 h-screen p-5 flex flex-col text-white fixed">
        <h2 className="text-2xl font-bold mb-6">Library</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 hover:text-gray-400">📂 Catalog</a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaBook /> Books</a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaUsers /> Users</a>
        </nav>
        <div className="mt-auto">
          <a href="#" className="flex items-center gap-3 hover:text-red-400"><FaSignOutAlt /> Log Out</a>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="ml-64 p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-[#27293D] p-4 rounded-lg">
          <h1 className="text-lg font-semibold">Nisal Gunasekara (Admin)</h1>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search by ID" className="bg-[#1E1F2E] text-white p-2 rounded-lg w-64" />
            <FaSearch className="text-gray-400" />
          </div>
          <span className="text-sm">12:29 PM, Sep 03, 2023</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button className={`px-4 py-2 rounded-lg font-medium ${activeTab === "borrowed" ? "bg-purple-500 text-white" : "bg-gray-700"}`} onClick={() => setActiveTab("borrowed")}>
            Borrowed Books
          </button>
          <button className={`px-4 py-2 rounded-lg font-medium ${activeTab === "overdue" ? "bg-purple-500 text-white" : "bg-gray-700"}`} onClick={() => setActiveTab("overdue")}>
            Overdue Borrowers
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#1E1F2E] p-4 rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#2D2E3E] text-white">
                <th className="p-3">ID</th>
                <th className="p-3">User ID</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="p-3">{row.id}</td>
                  <td className="p-3">{row.userId}</td>
                  <td className="p-3">{row.amount}</td>
                  <td className="p-3">{row.dueDate}</td>
                  <td className="p-3">{row.dateTime}</td>
                  <td className="p-3 text-center">
                    <button className="text-red-400 hover:text-red-600"><FaTrash /></button>
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

export default Dashboard;
