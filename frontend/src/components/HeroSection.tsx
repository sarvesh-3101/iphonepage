import React from "react";
import SpecialistStoreSection from "../components/SpecialistStoreSection";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-1 mt-0">

      <nav id="chapternav" className="w-full bg-gray-100 p-6 rounded-lg flex items-center">
        
        <ul className="flex justify-between overflow-x-auto">
          <li className="p-2"><a href="/iphone-16-pro/" className="text-blue-600"><img src="/iphone 16.png" alt="" className="w-12 h-12 mr-4" />iPhone 16 Pro <span className="text-red-500">New</span></a></li>
          <li className="p-2"><a href="/iphone-16/" className="text-blue-600"><img src="/iphone 16.png" alt="" className="w-12 h-12 mr-4" />iPhone 16 <span className="text-red-500">New</span></a></li>
          <li className="p-2"><a href="/us/shop/goto/buy_iphone/iphone_15" className="text-blue-600"><img src="/iphone 16.png" alt="" className="w-12 h-12 mr-4" />iPhone 15</a></li>
          <li className="p-2"><a href="/us/shop/goto/buy_iphone/iphone_14" className="text-blue-600"><img src="/iphone 16.png" alt="" className="w-12 h-12 mr-4" />iPhone 14</a></li>
          <li className="p-2"><a href="/iphone-se/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />iPhone SE</a></li>
          <li className="p-2"><a href="/iphone/compare/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />Compare</a></li>
          <li className="p-2"><a href="/airpods/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />AirPods <span className="text-red-500">New</span></a></li>
          <li className="p-2"><a href="/airtag/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />AirTag</a></li>
          <li className="p-2"><a href="/us/shop/goto/iphone/accessories" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />Accessories</a></li>
          <li className="p-2"><a href="/apple-card/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />Apple Card</a></li>
          <li className="p-2"><a href="/ios/ios-18/" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />iOS 18</a></li>
          <li className="p-2"><a href="/us/shop/goto/buy_iphone" className="text-blue-600"><img src="/path-to-logo.png" alt="" className="w-12 h-12 mr-4" />Shop iPhone</a></li>
        </ul>
      </nav>
      <div className="w-full bg-red-100 p-4 text-center rounded-lg mb-6">
        <p className="text-gray-900">
          Find something special for your special someone this Valentine’s Day.
          <a href="/us/shop/goto/store" className="text-blue-600 ml-2 underline">Shop</a>
        </p>
      </div>

      <SpecialistStoreSection />
    </div>
  );
};

export default HeroSection;
