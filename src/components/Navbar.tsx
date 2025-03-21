'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-regular text-white uppercase tracking-wider">
              Brian Pope
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/portfolio" 
              className={`text-gray-200 hover:text-white px-3 py-2 rounded-md uppercase tracking-wide ${isActive('/portfolio') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              UX Portfolio
            </Link>
            <span className="text-gray-400 px-2">/</span>
            <Link 
              href="/images" 
              className={`text-gray-200 hover:text-white px-3 py-2 rounded-md uppercase tracking-wide ${isActive('/images') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Images
            </Link>
            <span className="text-gray-400 px-2">/</span>
            <Link 
              href="/data-visualization" 
              className={`text-gray-200 hover:text-white px-3 py-2 rounded-md uppercase tracking-wide ${isActive('/data-visualization') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Data Visualization
            </Link>
            <span className="text-gray-400 px-2">/</span>
            <Link 
              href="/contact" 
              className={`text-gray-200 hover:text-white px-3 py-2 rounded-md uppercase tracking-wide ${isActive('/contact') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-black/20"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-3">
            <Link 
              href="/portfolio" 
              className={`block px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-black/20 uppercase tracking-wide ${isActive('/portfolio') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              UX Portfolio
            </Link>
            <Link 
              href="/images" 
              className={`block px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-black/20 uppercase tracking-wide ${isActive('/images') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Images
            </Link>
            <Link 
              href="/data-visualization" 
              className={`block px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-black/20 uppercase tracking-wide ${isActive('/data-visualization') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Data Visualization
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-black/20 uppercase tracking-wide ${isActive('/contact') ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 