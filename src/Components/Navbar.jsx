
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-10 sm:top-12 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-5 lg:px-8 py-4">
        {/* Logo/Brand */}
        <div className="text-lg sm:text-xl font-bold text-gray-900 truncate">
          S.R.S.B. Barcode Solutions
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base font-semibold">
          <li><a href="#" className="hover:text-gray-700 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-gray-700 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-gray-700 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-gray-700 transition-colors">Contact Us</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden md:block ml-6 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors">
          Chat with us!
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <ul className="space-y-2">
            <li>
              <a 
                href="#" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
          <div className="mt-4 pb-2">
            <button 
              className="w-full rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-base text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat with us!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;