'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      {/* Mobile Overlay and Drawer */}
      {sidebarOpen && (
        <>
          {/* Mobile Overlay - only visible on mobile */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden"
            onClick={handleSidebarClose}
          />
          {/* Mobile Drawer - only visible on mobile */}
          <aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col lg:hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold">Categories</span>
              <button
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={handleSidebarClose}
                aria-label="Close sidebar"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </aside>
        </>
      )}

      {/* Desktop Sidebar - Always visible on desktop */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 flex-col">
        <div className="flex items-center justify-center p-4 border-b">
          <span className="text-lg font-bold">Categories</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-72">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Menu - Only visible on mobile */}
            <button
              className="mr-2 flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open categories menu"
            >
              <span className="sr-only">Open categories menu</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="28" height="2.5" rx="1.25" fill="#222" />
                <rect y="13" width="28" height="2.5" rx="1.25" fill="#222" />
                <rect y="20" width="28" height="2.5" rx="1.25" fill="#222" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Right side - Cart and Sign In */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Sign In Button */}
              <Link
                href="/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
