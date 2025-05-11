import React from 'react';
import Section from './ui/Section';
import profileData from '../data/profileData';

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = {
    technical: profileData.skills.filter(skill => skill.category === 'technical'),
    soft: profileData.skills.filter(skill => skill.category === 'soft'),
    language: profileData.skills.filter(skill => skill.category === 'language')
  };

  return (
    <Section 
      id="skills" 
      title="Skills & Expertise" 
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="space-y-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.technical.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}/10
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {skillCategories.soft.map((skill) => (
                <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              {skillCategories.language.map((skill) => (
                <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <div className="flex">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full mx-0.5 ${
                            i < skill.level 
                              ? 'bg-blue-600 dark:bg-blue-500' 
                              : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;