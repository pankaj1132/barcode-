import React from 'react';
import TopHeader from '../Components/TopHeader';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import WhatWeDo from '../Components/WhatWeDo';
import WhyWeAreUnique from '../Components/whyWeAreUnique';
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 2s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .group-hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
      
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <TopHeader />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20 sm:pt-24">
        {/* Page Title Section */}
        <div className="relative bg-gradient-to-r from-blue-500/70 via-purple-600/60 to-teal-600/80 text-white py-16 sm:py-20 overflow-hidden group cursor-pointer transition-all duration-500 hover:from-blue-600/80 hover:via-purple-700/70 hover:to-teal-700/90">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-20 w-32 h-32 bg-white/5 rounded-full animate-ping slow"></div>
            <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transform transition-all duration-700 group-hover:scale-105 group-hover:text-shadow-lg animate-fadeInUp" style={{fontFamily: 'Montserrat, sans-serif'}}>
                About Us
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 group-hover:scale-102 group-hover:text-white animate-fadeInUp">
                Learn more about S.R.S.B. Barcode Solutions and our commitment to excellence
              </p>
              
              {/* Animated underline */}
              <div className="mt-6 mx-auto w-24 h-1 bg-white/50 rounded-full transform transition-all duration-500 group-hover:w-32 group-hover:bg-white/80 animate-fadeInUp delay-300"></div>
            </div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-white/20 rounded-full animate-float-slow"></div>
          </div>
        </div>

        {/* About Us Component */}
        <About />
        
        {/* What We Do Component */}
        <WhatWeDo />
        
        {/* Why We Are Unique Component */}
        <WhyWeAreUnique />
      </main>
      
    
    </div>
    </>
  );
};

export default AboutPage;
