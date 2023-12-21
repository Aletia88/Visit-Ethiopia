import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Vist Ethiopia</h4>
            <p className="text-sm">"Discover Ethiopia A Tapestry of Tradition, Nature, and Endless Wonder."</p>
          </div>
        
          
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Visit Ethiopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;