"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Returned from "@/app/Returned/page";

const Borrowed = dynamic(() => import("@/app/borrowed/page"), { ssr: false });

const LibraryDashboard = () => {
  const [activeTab, setActiveTab] = useState("borrowed");

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Library Records
        </h1>

        <input
          type="text"
          placeholder="Search by ID..."
          className="mt-4 md:mt-0 w-full md:w-64 px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab("borrowed")}
          className={`px-5 py-2 rounded-xl font-medium ${
            activeTab === "borrowed"
              ? "bg-indigo-600 text-white"
              : "bg-white text-slate-700 hover:bg-slate-200"
          }`}
        >
          Borrowed Books
        </button>

        <button
          onClick={() => setActiveTab("returned")}
          className={`px-5 py-2 rounded-xl font-medium ${
            activeTab === "returned"
              ? "bg-indigo-600 text-white"
              : "bg-white text-slate-700 hover:bg-slate-200"
          }`}
        >
          Returned Books
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        {activeTab === "returned" ? <Returned /> : <Borrowed />}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Books</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id) => (
              <tr key={id} className="border-t hover:bg-slate-50">
                <td className="p-3">{id}</td>
                <td className="p-3">1</td>
                <td className="p-3">02 Books</td>
                <td className="p-3">13-03-2024</td>
                <td className="p-3">25-02-2024 10:39</td>
                <td className="p-3 text-center">
                  <button className="px-3 py-1 rounded-lg bg-red-500 text-white text-xs hover:bg-red-600">
                    Return
                  </button>
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