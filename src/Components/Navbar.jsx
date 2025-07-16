
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    'Barcode Labels',
    'Barcode Printing Software',
    'Product Labels / Stickers',
    'Label Printing Services',
    'Jewellery Labels / Stickers',
    'Woven Labels / Stickers',
    'Packaging Labels / Stickers',
    'Mobile IMEI Barcode Labels / Stickers & Printing Services',
    'Footwear Labels / Stickers',
    'Garment Labels / Stickers',
    'Mobile Accessories Labels / Stickers'
  ];

  return (
    <nav className="fixed top-10 sm:top-12 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-5 lg:px-8 py-4">
        {/* Logo/Brand */}
        <div className="text-lg sm:text-xl font-bold text-gray-900 truncate">
          S.R.S.B. Barcode Solutions
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base font-semibold">
          <li><Link to="/" className="hover:text-indigo-600 transition-colors" onClick={handleNavClick}>Home</Link></li>
          <li><Link to="/about" className="hover:text-indigo-600 transition-colors" onClick={handleNavClick}>About</Link></li>
          <li className="relative">
            <button 
              className="hover:text-indigo-600 transition-colors"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              Services
            </button>
            {/* Services Dropdown */}
            <div 
              className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 z-50 transition-all duration-300 ${
                isServicesDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="py-2">
                {servicesList.map((service, index) => (
                  <a 
                    key={index}
                    href="#services" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 border-l-3 border-transparent hover:border-indigo-500"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </li>
          <li><Link to="/contact" className="hover:text-indigo-600 transition-colors" onClick={handleNavClick}>Contact Us</Link></li>
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
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>
            <li>
              <div className="relative">
                <button 
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                  onClick={toggleServicesDropdown}
                >
                  Services
                </button>
                {/* Mobile Services Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-md p-2">
                    {servicesList.map((service, index) => (
                      <a 
                        key={index}
                        href="#services" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        onClick={handleNavClick}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
          <div className="mt-4 pb-2">
            <button 
              className="w-full rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-base text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors"
              onClick={handleNavClick}
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