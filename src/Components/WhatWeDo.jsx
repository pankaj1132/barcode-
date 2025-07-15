import React, { useState } from 'react';

const WhatWeDo = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const truncateText = (text, maxWords = 10) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };
  const services = [
    {
      id: 1,
      icon: "📌",
      title: "Barcode Labels",
      description: "We supply high-quality barcode labels that are compatible with all major barcode printers. Ideal for inventory tracking, retail, logistics, and product management."
    },
    {
      id: 2,
      icon: "🖥️",
      title: "Barcode Printing Software",
      description: "We offer reliable and user-friendly barcode printing software to help you design and print barcodes, QR codes, and product labels with ease and accuracy."
    },
    {
      id: 3,
      icon: "🏷️",
      title: "Product Labels / Stickers",
      description: "Custom-designed labels to match your brand's identity and regulatory needs, used for consumer goods, packaging, and product marketing."
    },
    {
      id: 4,
      icon: "🖨️",
      title: "Label Printing Services",
      description: "Need labels printed in bulk? We provide fast, affordable, and professional label printing services using high-end equipment and quality materials."
    },
    {
      id: 5,
      icon: "💍",
      title: "Jewellery Labels / Stickers",
      description: "Specially designed small-size, non-tearable labels that are perfect for pricing and tagging in jewelry stores, without damaging delicate pieces."
    },
    {
      id: 6,
      icon: "🧵",
      title: "Woven Labels / Stickers",
      description: "Premium woven labels for garments and textiles, helping brands add a professional finishing touch to clothing and fabric products."
    },
    {
      id: 7,
      icon: "📦",
      title: "Packaging Labels / Stickers",
      description: "Durable packaging labels suitable for shipping, branding, and handling instructions. Available in waterproof, tamper-proof, and thermal variants."
    },
    {
      id: 8,
      icon: "📱",
      title: "Mobile IMEI Barcode Labels / Stickers & Printing Services",
      description: "We specialize in mobile phone IMEI barcode labels with high accuracy and print clarity, including batch printing and custom serialization."
    },
    {
      id: 9,
      icon: "👟",
      title: "Footwear Labels / Stickers",
      description: "Customized footwear stickers used for shoe boxes, soles, and inner lining branding. Designed to be wear-resistant and long-lasting."
    },
    {
      id: 10,
      icon: "👕",
      title: "Garment Labels / Stickers",
      description: "We produce size tags, brand stickers, care instruction labels, and more for the apparel industry with durable adhesives and clear prints."
    },
    {
      id: 11,
      icon: "🔌",
      title: "Mobile Accessories Labels / Stickers",
      description: "Custom labels for mobile chargers, cables, cases, and other accessories, designed for brand authentication and packaging aesthetics."
    },
    {
      id: 12,
      icon: "🍦",
      title: "Paper Ice Cream Labels",
      description: "Specialized paper labels designed for ice cream packaging, cups, and containers. Food-safe, moisture-resistant, and perfect for freezer environments with vibrant colors that attract customers."
    }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Do</h2>
          <p className="text-lg text-gray-600 w-full mx-auto">
            At S.R.S.B. Barcode Solutions, we specialize in providing a wide range of labeling and barcode solutions tailored for various industries. Our products are crafted to deliver precision, quality, and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-3 transform hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-2">
                  {expandedItems[service.id] ? service.description : truncateText(service.description, 10)}
                </p>
                {service.description.split(' ').length > 10 && (
                  <button 
                    onClick={() => toggleExpanded(service.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 focus:outline-none"
                  >
                    {expandedItems[service.id] ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
              
              {/* Hover indicator */}
              <div className="mt-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-white mb-4">
              Contact us today to discuss your labeling and barcode solution needs. We're here to help you find the perfect solution for your business.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
