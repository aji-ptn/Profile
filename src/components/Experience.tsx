import React from 'react';
import Section from './ui/Section';
import profileData from '../data/profileData';
import { Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 pl-8 ml-4 md:ml-8 space-y-10">
          {profileData.experience.map((job, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] mt-1.5 w-7 h-7 bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-500 rounded-full"></div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{job.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {job.position}
                </h3>
                
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {job.company}
                </h4>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {job.description}
                </p>
                
                <div className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 size={18} className="text-green-600 dark:text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;