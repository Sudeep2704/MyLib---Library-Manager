"use client";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100 flex items-center justify-center p-6">
      
      {/* Main Card */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl bg-white">
        
        {/* Left - Branding */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 flex-col justify-center items-center px-8 py-12 text-white">
          <h1 className="text-4xl font-extrabold tracking-wide mb-6">
            LIBRARY
          </h1>
          <p className="text-center text-indigo-100 max-w-xs leading-relaxed">
            Your premier digital library for borrowing and reading books
          </p>
        </div>

        {/* Right - Reset Password */}
        <div className="relative w-full md:w-2/3 flex flex-col justify-center px-8 md:px-16 py-12">
          
          {/* Back Button */}
          <Link
            href="/aotp"
            className="absolute top-6 right-6 text-sm text-gray-500 hover:text-gray-800 transition"
          >
            ← Back
          </Link>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Reset Password
          </h2>
          <p className="text-gray-500 mb-8">
            Create a new strong password for your account
          </p>

          {/* Inputs */}
          <input
            type="password"
            placeholder="New Password"
            className="w-full max-w-sm p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full max-w-sm p-3 mb-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Button */}
          <Link
            href="/asignin"
            className="bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold text-center w-full max-w-sm hover:bg-indigo-700 transition"
          >
            Update Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;