'use client';

import React, { useState } from 'react';
import { 
  FaJsSquare, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt,
  FaPython,
  FaJava
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiDjango,
  SiCplusplus,
} from 'react-icons/si';

const iconMap = {
  javascript: FaJsSquare,
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
  python: FaPython,
  java: FaJava,
  pandas: SiPandas,
  scikit: SiScikitlearn,
  flask: SiFlask,
  django: SiDjango,
  cpp: SiCplusplus
};

const skills = {
  languages: [
    {
      title: "JavaScript",
      level: 90,
      description: "Modern ES6+ features, async programming, and DOM manipulation",
      iconName: "javascript"
    },
    {
      title: "Python",
      level: 85,
      description: "Data processing, automation, and backend development",
      iconName: "python"
    },
    {
      title: "Java",
      level: 80,
      description: "Object-oriented programming and enterprise applications",
      iconName: "java"
    },
    {
      title: "C++",
      level: 75,
      description: "System programming and performance optimization",
      iconName: "cpp"
    },
    {
      title: "HTML5",
      level: 95,
      description: "Semantic markup and modern web standards",
      iconName: "html"
    },
    {
      title: "CSS3",
      level: 85,
      description: "Responsive design and modern layouts",
      iconName: "css"
    }
  ],
  frameworks: [
    {
      title: "React",
      level: 90,
      description: "Component-based UI development with hooks and context",
      iconName: "react"
    },
    {
      title: "Next.js",
      level: 85,
      description: "Server-side rendering and static site generation",
      iconName: "nextjs"
    },
    {
      title: "Django",
      level: 80,
      description: "Full-featured web framework for Python",
      iconName: "django"
    },
    {
      title: "Flask",
      level: 75,
      description: "Lightweight web framework for Python",
      iconName: "flask"
    }
  ],
  libraries: [
    {
      title: "Tailwind CSS",
      level: 90,
      description: "Utility-first CSS framework for rapid UI development",
      iconName: "tailwind"
    },
    {
      title: "Pandas",
      level: 85,
      description: "Data manipulation and analysis",
      iconName: "pandas"
    },
    {
      title: "Scikit-learn",
      level: 80,
      description: "Machine learning and statistical modeling",
      iconName: "scikit"
    }
  ]
};

const SkillCard = ({ title, level, description, iconName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[iconName];

  return (
    <div
      className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 widget"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          {Icon && <Icon className={`w-8 h-8 ${isHovered ? 'text-primary' : 'text-gray-400'} transition-colors duration-300`} />}
          <div className="w-24 h-1 rounded-full bg-gray-800">
            <div 
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('languages');
  
  const categories = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'libraries', label: 'Libraries' },
  ];

  return (
    <div className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40" id="skills">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold">
          VARIOUS <br /> <span className="text-primary">EXPERT!SE</span>
        </h2>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 widget">
          {skills[selectedCategory].map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              level={skill.level}
              description={skill.description}
              iconName={skill.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;