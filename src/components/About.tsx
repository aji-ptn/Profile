import React from 'react';
import Section from './ui/Section';
import profileData from '../data/profileData';
import { Briefcase, GraduationCap, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

// Map of icon names to components
const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {profileData.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Work Experience
              </h3>
              <div className="flex items-start">
                <Briefcase size={20} className="mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">{profileData.experience[0].position}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profileData.experience[0].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="flex items-start">
                <GraduationCap size={20} className="mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">{profileData.education[0].degree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profileData.education[0].school}, {profileData.education[0].year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{profileData.email}</span>
            </div>
            
            {profileData.phone && (
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{profileData.phone}</span>
              </div>
            )}
            
            <div className="flex items-center">
              <MapPin size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{profileData.location}</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            
            <div className="flex space-x-4">
              {profileData.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return IconComponent ? (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                    aria-label={link.platform}
                  >
                    <IconComponent size={20} className="text-blue-600 dark:text-blue-400" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;