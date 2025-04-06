"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-[#6366F1]">BizBuzz</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-8">
            <Link 
              href="/camps" 
              className={`text-sm transition-colors ${
                pathname === "/camps" 
                  ? "text-[#6366F1] font-medium" 
                  : "text-[#000000] hover:text-[#6366F1]"
              }`}
            >
              Bootcamps
            </Link>
            <Link 
              href="/practice" 
              className={`text-sm transition-colors ${
                pathname === "/practice" 
                  ? "text-[#6366F1] font-medium" 
                  : "text-[#000000] hover:text-[#6366F1]"
              }`}
            >
              Fish Tank
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors ${
                pathname === "/contact" 
                  ? "text-[#6366F1] font-medium" 
                  : "text-[#000000] hover:text-[#6366F1]"
              }`}
            >
              Workshops
            </Link>
            <Link 
              href="/sessions" 
              className={`text-sm transition-colors ${
                pathname === "/sessions" 
                  ? "text-[#6366F1] font-medium" 
                  : "text-[#000000] hover:text-[#6366F1]"
              }`}
            >
              1:1 Sessions
            </Link>
            <Link 
              href="/about" 
              className={`text-sm transition-colors ${
                pathname === "/about" 
                  ? "text-[#6366F1] font-medium" 
                  : "text-[#000000] hover:text-[#6366F1]"
              }`}
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