import Image from 'next/image';
import React from 'react';

const ComingSoonFarmToPalm = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-yellow-400 hidden sm:block p-4 md:p-6 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Farm to Palm</h1>
          <p className="text-white mt-2 text-sm sm:text-base">Fresh produce delivered directly to you</p>
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