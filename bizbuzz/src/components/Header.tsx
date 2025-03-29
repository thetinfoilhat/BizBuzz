"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-[#6366F1]">BizBuzz</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-8">
            <Link 
              href="/dashboard" 
              className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors"
            >
              Bootcamps
            </Link>
            <Link 
              href="/practice" 
              className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors"
            >
              Fish Tank
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors"
            >
              Workshops
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors"
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 