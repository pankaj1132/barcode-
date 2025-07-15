import { unique } from '../assets'; // Assuming you have an image in your assets folder

const  WhyWeAreUnique = () => {
  return (
    <div className="py-10 sm:pt-1.5 md:py-9 lg:py-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Section - First on mobile, left side on desktop */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why We Are Unique??
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                At <strong>S.R.S.B. Barcode Solutions</strong>, what makes us unique is our ability to offer <strong>end-to-end labeling and barcode solutions under one roof</strong>. From barcode labels and IMEI stickers to garment and packaging labels, we cater to a wide range of industries with precision and customization. Our products are not only high in quality but also tailored to meet specific functional and branding needs—whether it's for retail, mobile accessories, jewelry, or logistics.
              </p>
              <p>
                With over <strong>20 years of industry experience</strong>, we combine premium materials, advanced printing technology, and reliable software solutions to ensure efficiency, accuracy, and compliance. Our commitment to <strong>customer satisfaction, fast turnaround times</strong>, and deep understanding of sector-specific requirements makes us a trusted and preferred partner for businesses across India.
              </p>
            </div>
            <button className="mt-6 sm:mt-8 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Read More...
            </button>
          </div>
          
          {/* Image Section - Second on mobile, right side on desktop */}
          <div className="flex-1 lg:pl-8">
            <div className="relative">
              <img 
                src={unique}
                alt="Professional Barcode Solutions" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg"
              />
              {/* Optional overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreUnique;
