import { aboutimage } from '../assets'; // Assuming you have an image in your assets folder

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Section - First on mobile, left side on desktop */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              About Us – S.R.S.B. Barcode Solutions
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Established in 2003, S.R.S.B. Barcode Solutions has emerged as a trusted name in the field of labeling and identification solutions. With over two decades of industry experience, we specialize in the wholesale trading of a wide range of premium-quality labeling products including shipping labels, hologram stickers, food product labels, and customized barcode solutions tailored to meet the specific needs of diverse industries.
              </p>
              <p>
                At S.R.S.B., we pride ourselves on our commitment to quality, reliability, and customer satisfaction. Whether you are a small business or a large-scale enterprise, we offer scalable solutions that ensure smooth inventory management, product authentication, and brand enhancement.
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
                src={aboutimage}
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

export default About;
