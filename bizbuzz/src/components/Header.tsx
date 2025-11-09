"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      href: "/camps", 
      label: "Camps",
      hasDropdown: true,
      dropdownItems: [
        { href: "/camps", label: "2024 Camps", color: "#38b6ff" },
        { href: "/camps-2025", label: "2025 Camps", color: "#FFBF00" }
      ]
    },
    { href: "/workshops", label: "Workshops" },
    { 
      href: "/fish-tank", 
      label: "Fish Tank",
      hasDropdown: true,
      dropdownItems: [
        { href: "/fish-tank", label: "2024 Fish Tank", color: "#38b6ff" },
        { href: "/fish-tank-2025", label: "2025 Fish Tank", color: "#FFBF00" }
      ]
    },
    { href: "/sessions", label: "1:1 Sessions" },
    { href: "/about", label: "About Us" },
  ];

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
              <div className="flex items-center">
                <span className="text-xl font-semibold text-[#3AB6FF]">BizBuzz</span>
                <span className="text-xl font-semibold text-[#FFD700] ml-1">NFP</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 pr-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button 
                    className={`text-sm transition-colors flex items-center ${
                      pathname === link.href || link.dropdownItems?.some(item => pathname === item.href || (item.href.includes('#') && pathname.startsWith(item.href.split('#')[0])))
                        ? "text-[#3AB6FF] font-medium" 
                        : "text-[#000000] hover:text-[#3AB6FF]"
                    }`}
                  >
                    {link.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                    <div className="py-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                            pathname === item.href
                              ? "bg-blue-50 font-medium"
                              : ""
                          }`}
                        >
                          <div className="flex items-center">
                            {item.color && (
                              <div 
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: item.color }}
                              ></div>
                            )}
                            <span style={{ color: item.color || '#000000' }}>
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-sm transition-colors ${
                    pathname === link.href 
                      ? "text-[#3AB6FF] font-medium" 
                      : "text-[#000000] hover:text-[#3AB6FF]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center pr-4 hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-[#3AB6FF] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#3AB6FF] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-[#3AB6FF] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`mobile-menu md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.hasDropdown ? (
                <div className="mb-2">
                  <div className="text-[#000000] font-semibold py-2 text-base border-b border-gray-100">
                    {link.label}
                  </div>
                  {link.dropdownItems?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-2 pl-4 text-sm transition-colors ${
                        pathname === item.href
                          ? "font-medium"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        {item.color && (
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        )}
                        <span style={{ color: item.color || '#000000' }}>
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link 
                  href={link.href} 
                  className={`block py-3 text-base transition-colors ${
                    pathname === link.href 
                      ? "text-[#3AB6FF] font-medium" 
                      : "text-[#000000] hover:text-[#3AB6FF]"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 