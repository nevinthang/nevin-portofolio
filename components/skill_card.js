'use client';

import React, { useState } from 'react';
import { 
  FaJsSquare, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const iconMap = {
  javascript: FaJsSquare,
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
};

const SkillCard = ({ title, level, description, iconName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[iconName];

  return (
    <div
      className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50"
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

export default SkillCard;