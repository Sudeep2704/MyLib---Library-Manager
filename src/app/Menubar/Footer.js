import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Growth
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Chat
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Pricing</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Standard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Business
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enterprise</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Personalize
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Invoicing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Careers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Open Positions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Part-Time
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Contractual
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm">
            © 2024 Your Site. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <Link
              href="/"
              className="hover:text-blue-500 transition text-sm"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="hover:text-blue-500 transition text-sm"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
