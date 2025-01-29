'use client';

import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: "Information System",
    institution: "Universitas Indonesia",
    period: "2023 - present",
    description: "Bachelor's degree with focus on software engineering, management, and artificial intelligence.",
    type: "education",
    achievements: ["Teaching Assistant", "3rd Winner of Falcon x Qatar Airways AI Competition"]
  },
  {
    id: 2,
    title: "People Operations of Network and Security",
    company: "RISTEK",
    period: "2024 - 2025",
    description: "Managed and optimized people operations for the Network and Security division, fostering collaboration and efficiency within the team.",
    type: "wor",
    skills: ["Human resource"]
  },
  {
    id: 3,
    title: "Data Analytics Dash Competition Staff",
    institution: "COMPFEST 16",
    period: "2024",
    description: "Organized and facilitated a nationwide data analytics competition, ensuring smooth execution and engaging participant experience.",
    type: "organization"
  }
];

const TimelineCard = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return FaBriefcase;
      case 'education':
        return FaGraduationCap;
      default:
        return FaCode;
    }
  };

  const Icon = getIcon(experience.type);

  return (
    <div 
      className={`relative flex ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      } md:items-center group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <div className="w-px h-full bg-gradient-to-b from-primary/50 to-accent/50" />
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'} mb-8`}>
        <div 
          className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 
            transform transition-all duration-300 hover:scale-105 hover:border-primary/50"
        >
          {/* Hover effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl 
            transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
          />

          {/* Icon */}
          <div className="absolute -left-4 md:left-auto md:right-0 top-1/2 transform -translate-y-1/2 
            md:translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-primary flex items-center 
            justify-center z-10"
          >
            <Icon className={`w-4 h-4 ${isHovered ? 'text-primary' : 'text-gray-400'} 
              transition-colors duration-300`} 
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-sm text-primary mb-2">{experience.period}</div>
            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
            <div className="text-gray-400 font-medium mb-2">
              {experience.company || experience.institution}
            </div>
            <p className="text-gray-500 text-sm">{experience.description}</p>

            {/* Skills or Achievements */}
            {experience.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-gray-800 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {experience.achievements && (
              <div className="mt-4">
                {experience.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {achievement}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PathwaySection = () => {
  return (
    <div className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40 relative" id="experiences">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />

      {/* Section Header - Positioned uniquely */}
      <div className="relative">
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold pl-8">
          MY <br /> <span className="text-primary">PATHWAY</span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl ml-8 pl-4 border-l border-primary/30">
          A journey through education, experience, and continuous growth in technology
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-20 relative">
        {experiences.map((experience, index) => (
          <TimelineCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PathwaySection;