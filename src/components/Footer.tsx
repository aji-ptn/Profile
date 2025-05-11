import React from 'react';
import { ArrowUp } from 'lucide-react';
import profileData from '../data/profileData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              {profileData.name.split(' ')[0]}
              <span className="text-blue-400">
                {profileData.name.split(' ')[1]}
              </span>
            </h2>
            <p className="text-gray-400 max-w-md">
              {profileData.title} focused on creating elegant, efficient solutions
              that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full mb-4 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;