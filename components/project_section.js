"use client";

import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portofolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experiences in a visually appealing and interactive way.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/porto.png",
    github: "https://github.com/nevinthang/nevin-portofolio",
    live: "https://nevin-thang.vercel.app/",
    featured: true,
  },
  {
    title: "Balink",
    description: "A seamless web and mobile platform for renting transportation in Bali, offering a hassle-free booking experience for travelers.",
    tags: ["Python", "Dart", "Django", "Flutter", "Tailwind CSS"],
    image: "/images/porto2.png",
    github: "https://github.com/B09-PBP/balink",
    live: "https://nevin-thang-balink.pbp.cs.ui.ac.id/",
    featured: true,
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Tags Overlay */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-900/80 text-primary border border-primary/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  
    {/* Project Info */}
    <div className="p-6 space-y-4 relative z-30">
      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
      <p className="text-gray-400 text-sm">{project.description}</p>
  
      {/* Links */}
      <div className="flex gap-4 pt-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300">
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300">
            <FaExternalLinkAlt className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  
    {/* Hover Effect Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    />
  </div>
  
  );
};

const ProjectsSection = () => {
  return (
    <div className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40 " id="projects" >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold">
          MY <br /> <span className="text-primary">ENDEAVOUR</span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl">Exploring the intersection of creativity and technology through meaningful projects</p>
      </div>

      {/* Featured Projects Grid */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>

      {/* Other Projects Grid */}
      {/*       <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsSection;
