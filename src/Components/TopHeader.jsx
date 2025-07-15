import React from 'react';

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black h-10 sm:h-12 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 z-[51]">
      {/* Contact Info - Hidden on very small screens, shown on sm and up */}
      <div className="hidden sm:flex items-center space-x-2 md:space-x-3 text-white text-xs sm:text-sm font-semibold">
        <i className="fas fa-phone-alt text-xs sm:text-sm"></i>
        <span className="hidden md:inline">+91-9810244624</span>
        <span className="md:hidden">+91-9810244624</span>
        <span className="opacity-50 hidden md:inline">|</span>
        <i className="fas fa-envelope text-xs sm:text-sm hidden md:inline"></i>
        <span className="hidden lg:inline">srsb.barcode@gmail.com</span>
      </div>
      
      {/* Mobile Contact Info - Only phone number on very small screens */}
      <div className="sm:hidden flex items-center space-x-2 text-white text-xs font-semibold">
        <i className="fas fa-phone-alt"></i>
        <span>+91-9810244624</span>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-2 z-10">
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-sm sm:text-lg hover:bg-gray-100 transition-colors"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-sm sm:text-lg hover:bg-gray-100 transition-colors"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-sm sm:text-lg hover:bg-gray-100 transition-colors"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-sm sm:text-lg hover:bg-gray-100 transition-colors"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      
      {/* Decorative Triangle - Hidden on mobile */}
      <div 
        className="absolute top-0 right-0 h-10 sm:h-12 w-16 sm:w-24 bg-white hidden sm:block" 
        style={{clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'}}
      ></div>
    </div>
  );
};

export default TopHeader;
