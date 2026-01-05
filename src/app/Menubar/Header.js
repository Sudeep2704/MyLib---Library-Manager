"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full sm:px-8 px-4  py-3 bg-[#EDFFF5] flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-black">
        logo
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-black text-2xl md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navbar */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-[#c8f9df]  text-black sm:bg-transparent flex-col items-center space-y-4 p-4 md:static md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-8`}
      >
        <Link
          href="/features"
          className="text-lg font-medium relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-lg font-medium relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Pricing
        </Link>
        <Link
          href="/sign-in"
          className="text-lg font-medium relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Header;
