import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import profileData from '../data/profileData';
import { ExternalLink, Github } from 'lucide-react';
import Button from './ui/Button';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profileData.projects.map((project, index) => (
          <Card 
            key={project.title} 
            hoverable 
            className="overflow-hidden"
          >
            <div 
              className="relative h-48 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
              >
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-white">+{project.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Card.Content>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              {/* Project Features */}
              {selectedProject === index && project.features && (
                <div className="mb-4 animate-fadeIn">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Project Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;