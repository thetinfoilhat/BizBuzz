"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center pl-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-6 h-6">
                <Image 
                  src="/logo.png" 
                  alt="BizBuzz Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-[#3AB6FF]">BizBuzz</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-8 pr-4">
            <Link 
              href="/camps" 
              className={`text-sm transition-colors ${
                pathname === "/camps" 
                  ? "text-[#3AB6FF] font-medium" 
                  : "text-[#000000] hover:text-[#3AB6FF]"
              }`}
            >
              Camps
            </Link>
            <Link 
              href="/workshops" 
              className={`text-sm transition-colors ${
                pathname === "/workshops" 
                  ? "text-[#3AB6FF] font-medium" 
                  : "text-[#000000] hover:text-[#3AB6FF]"
              }`}
            >
              Workshops
            </Link>
            <Link 
              href="/practice" 
              className={`text-sm transition-colors ${
                pathname === "/practice" 
                  ? "text-[#3AB6FF] font-medium" 
                  : "text-[#000000] hover:text-[#3AB6FF]"
              }`}
            >
              Fish Tanks
            </Link>
            <Link 
              href="/sessions" 
              className={`text-sm transition-colors ${
                pathname === "/sessions" 
                  ? "text-[#3AB6FF] font-medium" 
                  : "text-[#000000] hover:text-[#3AB6FF]"
              }`}
            >
              1:1 Sessions
            </Link>
            <Link 
              href="/about" 
              className={`text-sm transition-colors ${
                pathname === "/about" 
                  ? "text-[#3AB6FF] font-medium" 
                  : "text-[#000000] hover:text-[#3AB6FF]"
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