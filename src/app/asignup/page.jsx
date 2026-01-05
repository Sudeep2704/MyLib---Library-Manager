"use client";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100 flex items-center justify-center p-6">
      
      {/* Main Card */}
      <div className="flex w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl bg-white">
        
        {/* Left - Info Section */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 flex-col justify-center items-center px-10 py-12 text-white">
          <h1 className="text-4xl font-extrabold tracking-wide mb-4">
            LIBRARY
          </h1>
          <p className="text-center text-indigo-100 mb-8">
            Already have an account?
            <br />
            Sign in to continue.
          </p>

          <Link
            href="/asignin"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl w-full text-center hover:bg-indigo-50 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Right - Sign Up Form */}
        <div className="w-full md:w-2/3 flex flex-col justify-center px-8 md:px-16 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-8">
            Fill in the details to get started
          </p>

          {/* Inputs */}
          <div className="space-y-4 max-w-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Contact Number"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Username"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <Link
            href="/asignin"
            className="mt-8 bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold text-center max-w-xl hover:bg-indigo-700 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;