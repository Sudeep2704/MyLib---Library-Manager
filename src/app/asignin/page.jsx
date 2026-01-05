"use client";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100 flex items-center justify-center p-6">
      
      {/* Main Card */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl bg-white">
        
        {/* Left - Login */}
        <div className="w-full md:w-2/3 flex flex-col justify-center px-8 md:px-16 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-8">
            Login to continue managing your library
          </p>

          <input
            type="text"
            placeholder="Username"
            className="w-full max-w-sm p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-sm p-3 mb-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <Link
            href="/aforget"
            className="text-sm text-indigo-600 hover:underline mb-6 w-max"
          >
            Forgot password?
          </Link>

          <Link href="/LandingPage">
            <button className="w-full max-w-sm bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
              Sign In
            </button>
          </Link>
        </div>

        {/* Right - Signup */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex-col justify-center items-center px-10 py-12">
          <h1 className="text-4xl font-extrabold tracking-wide mb-4">
            LIBRARY
          </h1>
          <p className="text-center text-indigo-100 mb-8">
            New here? Create an account to start managing books easily.
          </p>

          <Link
            href="/asignup"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl w-full text-center hover:bg-indigo-50 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;