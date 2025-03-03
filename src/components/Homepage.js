import Image from 'next/image';
import React from 'react';

const ComingSoonFarmToPalm = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-600 hidden sm:block p-4 md:p-6 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Farm to Palm</h1>
          <p className="text-green-100 mt-2 text-sm sm:text-base">Fresh produce delivered directly to you</p>
        </div>
        
        {/* Image Section - Truly responsive with aspect ratio */}
        <div className="w-full relative aspect-[16/9]">
          <Image 
            src="/images/homepage.jpg" 
            alt="Farm to Palm Coming Soon" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>
        
        {/* The commented section below is preserved but improved for responsiveness */}
        {/* <div className="p-4 sm:p-6 md:p-8 lg:p-12 text-center">
          <div className="inline-block p-2 sm:p-3 rounded-full bg-green-100 mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">We&apos;re working hard to bring the freshest produce from local farms directly to your doorstep.</p>
          
          <div className="w-full max-w-md mx-auto mb-6 md:mb-8 px-4 sm:px-0">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
              <button className="absolute right-0 top-0 h-full bg-green-600 text-white font-medium px-3 sm:px-4 md:px-6 rounded-r-lg hover:bg-green-700 transition duration-200 text-sm sm:text-base">
                Notify Me
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">We&apos;ll let you know when we launch</p>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="#" className="text-green-600 hover:text-green-800">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div> */}
        
        {/* Footer Section */}
        <div className="bg-gray-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
          <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-0">© 2025 Farm to Palm. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-green-600">Privacy</a>
            <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-green-600">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonFarmToPalm;