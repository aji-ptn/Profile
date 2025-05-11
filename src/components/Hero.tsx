import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import profileData from '../data/profileData';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="inline-block">Hi, I'm </span>
              <span className="inline-block text-blue-600 dark:text-blue-400">
                {profileData.name.split(' ')[0]}
              </span>
            </h1>
            
            <div className="h-8 mb-6 overflow-hidden">
              <div className="animate-slide">
                <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 h-8">
                  {profileData.title}
                </p>
                <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 h-8">
                  Problem Solver
                </p>
                <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 h-8">
                  Creative Thinker
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {profileData.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                onClick={() => navigate('/about')}
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-blue-600 bg-opacity-10 animate-pulse"></div>
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-gray-800 p-3 rounded-full shadow-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
};

export default Hero;