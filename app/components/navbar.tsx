"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50 border-t border-2 border-yellow-400">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
     {/* Logo Section */}
     <div className="flex items-center space-x-3">
          {/* Logo Image */}
          <div className="w-12 h-12 relative">
            <Image
              src="/th6.jpeg" // Replace with your logo path
              alt="Ananya Furnitures Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <span className="text-2xl font-bold text-gray-800">
            Ananya Furnitures
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-blue-600"
            >
              Categories <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                <Link href="/category/sofa" className="block px-4 py-2 hover:bg-gray-100">
                  Sofas
                </Link>
                <Link href="/category/Table" className="block px-4 py-2 hover:bg-gray-100">
                  Tables
                </Link>
                <Link href="/category/chairs" className="block px-4 py-2 hover:bg-gray-100">
                  Chairs
                </Link>
              </div>
            )}
          </div>
          <Link href="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <Link href="/components/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/components/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 border-b">
            Home
          </Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full text-left px-4 py-2 border-b flex justify-between"
          >
            Categories <ChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="pl-6">
              <Link href="/category/sofa" className="block px-4 py-2">
                Sofas
              </Link>
              <Link href="/category/Table" className="block px-4 py-2">
                Tables
              </Link>
              <Link href="/category/chairs" className="block px-4 py-2">
                Chairs
              </Link>
            </div>
          )}
          <Link href="/shop" className="block px-4 py-2 border-b">
            Shop
          </Link>
         
          <Link href="/contact" className="block px-4 py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
