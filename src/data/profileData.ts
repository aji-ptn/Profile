import { Github, Briefcase } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'language';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  features?: string[];
  github?: string;
  demo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  avatar: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
  socialLinks: SocialLink[];
}

const profileData: ProfileData = {
  name: "Aji Pamungkas Tri Nurcahyo",
  title: "Software Engineer",
  tagline: "Building innovative digital experiences with clean, efficient code",
  email: "ajipamungkastn@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  bio: "I'm a passionate software engineer with 8+ years of experience specializing in front-end development and user experience design. I focus on creating elegant, efficient solutions that solve real-world problems. With a background in computer science and a keen eye for design, I bridge the gap between technical requirements and beautiful user experiences.",
  skills: [
    { name: "React", level: 9, category: "technical" },
    { name: "TypeScript", level: 8, category: "technical" },
    { name: "Node.js", level: 7, category: "technical" },
    { name: "UI/UX Design", level: 7, category: "technical" },
    { name: "GraphQL", level: 6, category: "technical" },
    { name: "AWS", level: 6, category: "technical" },
    { name: "Docker", level: 5, category: "technical" },
    { name: "Problem Solving", level: 9, category: "soft" },
    { name: "Communication", level: 8, category: "soft" },
    { name: "Team Leadership", level: 7, category: "soft" },
    { name: "English", level: 10, category: "language" },
    { name: "Spanish", level: 6, category: "language" },
  ],
  experience: [
    {
      company: "TechNova Solutions",
      position: "Senior Frontend Engineer",
      period: "2020 - Present",
      description: "Lead developer for enterprise SaaS dashboard applications serving over 50,000 users. Architect and implement frontend solutions using React, TypeScript, and GraphQL.",
      highlights: [
        "Reduced load time by 40% through code optimization and lazy loading techniques",
        "Implemented comprehensive UI component library used across 3 product lines",
        "Mentored junior developers, establishing best practices and code standards",
        "Led migration from legacy Angular codebase to modern React architecture"
      ]
    },
    {
      company: "DataViz Inc.",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Developed interactive data visualization tools for financial sector clients. Focused on creating intuitive UIs for complex data analysis.",
      highlights: [
        "Created custom chart components using D3.js and React",
        "Implemented responsive designs for cross-device compatibility",
        "Optimized rendering performance for large datasets",
        "Collaborated with UX team to refine user workflows"
      ]
    },
    {
      company: "WebCraft Studios",
      position: "Web Developer",
      period: "2016 - 2018",
      description: "Designed and developed websites and web applications for diverse client base. Handled both frontend and backend implementation.",
      highlights: [
        "Built 20+ client websites using JavaScript, HTML5, and CSS3",
        "Developed custom CMS solutions using Node.js and MongoDB",
        "Implemented e-commerce functionality for retail clients",
        "Increased page speed scores by an average of 30%"
      ]
    }
  ],
  projects: [
    {
      title: "TaskFlow Pro",
      description: "A modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      imageUrl: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Real-time task updates using Supabase subscriptions",
        "Drag-and-drop task organization with beautiful animations",
        "Dark mode support with system preference detection",
        "Responsive design for all device sizes",
        "Task categorization and priority levels",
        "Due date reminders and notifications",
        "Team member assignment and collaboration"
      ],
      github: "https://github.com/alexmorgan/taskflow-pro",
      demo: "https://taskflow-pro.demo.dev"
    },
    {
      title: "FinViz Dashboard",
      description: "Financial visualization dashboard with real-time data integration and customizable widgets",
      tags: ["React", "TypeScript", "D3.js", "Firebase"],
      imageUrl: "https://images.pexels.com/photos/7947771/pexels-photo-7947771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      title: "EcoTrack",
      description: "Environmental monitoring platform with IoT device integration and data visualization",
      tags: ["Vue.js", "Python", "AWS", "TensorFlow"],
      imageUrl: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      title: "RetailAI",
      description: "AI-powered inventory management and sales forecasting system for retail businesses",
      tags: ["React", "GraphQL", "Python", "TensorFlow"],
      imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    }
  ],
  education: [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      year: "2016"
    },
    {
      degree: "B.S. Computer Science",
      school: "University of California, Berkeley",
      year: "2014"
    }
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/alexmorgan",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/alexmorgan",
      icon: "Linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/alexmorgan",
      icon: "Twitter"
    }
  ]
};

export default profileData;