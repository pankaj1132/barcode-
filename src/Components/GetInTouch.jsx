import { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-white relative overflow-hidden">
      <div className="relative max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
          <span className="text-[#0f3d7a]">
            S.R.S.B. Barcode Solutions
          </span>
          <span className="text-purple-600">
            - Providing Best Barcode Solutions & Services!
          </span>
        </h1>
       
       
        <div className="mt-12 space-y-6 max-w-xl">
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-purple-800 font-semibold text-sm mb-1">Our Location</h3>
                <p className="text-purple-700 text-sm leading-relaxed">
                  A-311, Second Floor, Vikas Purii,<br />
                  New Delhi-110018, Delhi, India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-purple-800 font-semibold text-sm mb-1">Email Address</h3>
                <a href="mailto:srsb.barcode@gmail.com" className="text-purple-700 text-sm hover:text-purple-900 transition-colors">
                  srsb.barcode@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-purple-800 font-semibold text-sm mb-1">Phone Number</h3>
                <a href="tel:+919810244624" className="text-purple-700 text-sm hover:text-purple-900 transition-colors font-medium">
                  +91-9810244624
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form 
        onSubmit={handleSubmit}
        aria-label="Get A Free Consultation Form" 
        className="relative z-10 bg-white rounded-3xl p-8 mt-12 md:mt-0 md:ml-16 w-full max-w-md shadow-lg border border-gray-200"
      >
        <h2 className="text-center text-lg mb-6 font-serif text-black">
          Get A Free Consultation!
        </h2>
        <input 
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f3d7a]" 
          placeholder="Full Name" 
          type="text"
          required
        />
        <input 
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f3d7a]" 
          placeholder="Phone Number" 
          type="tel"
          required
        />
        <input 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f3d7a]" 
          placeholder="Official Email" 
          type="email"
          required
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0f3d7a]" 
          placeholder="Your Message" 
          rows="4"
        />
        <button 
          className="w-full bg-purple-500  text-white font-bold py-3 rounded-full hover:bg-purple-700  transition-colors" 
          type="submit"
        >
          Get A Quote
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;