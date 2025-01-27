import Image from "next/image";
import SkillCard from "../components/skill_card.js";
import { skills } from "../data/skills";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="bg-background text-text flex flex-col min-h-screen px-4 sm:px-10 font-sans justify-center">
      <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="relative w-full md:w-auto text-center md:text-left">
          <div className="rounded-full absolute -bottom-12 bg-pink-400 w-64 h-64 md:w-96 md:h-96 blur-2xl opacity-35 z-0 animate-blob"></div>
          <div className="z-10 relative">
            <div className="font-bold text-4xl md:text-6xl lg:text-7xl">
              Hello, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nevin</span>{" "}
            </div>
            <div className="pt-2 text-3xl md:text-5xl lg:text-6xl">
              I'm a <span className="text-text font-semibold">Data Enthusiast</span>
            </div>
          </div>
          <div className="space-x-5 flex mt-5 font-bold justify-center md:justify-start">
            <button className="rounded-lg bg-primary py-2 px-4 md:py-3 md:px-5 text-black">Know Me</button>
            <button className="rounded-lg bg-secondary py-2 px-4 md:py-3 md:px-5">Contact Me</button>
          </div>
          <div className="flex gap-6 mt-10">
            <a href="#" className="text-text/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-text/60 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-text/60 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-background rounded-2xl">
            <Image src="/images/photo.png" alt="Nevin's portrait" fill className="rounded-2xl object-cover grayscale" />
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold">ABOUT ME</span>
                <div className="h-0.5 w-12 bg-primary"></div>
              </div>

              <blockquote className="text-4xl md:text-5xl font-bold italic leading-tight">
                Turning data into decisions, <span className="text-primary">one insight at a time.</span>
              </blockquote>

              <p className="text-text/70 leading-relaxed">
                Driven by a passion for exploring the potential of data-driven solutions and AI technologies. Proficient in Python and C++ programming, with a proven track record in IT-related competitions and organizational roles. Equipped
                with a solid foundation in informatics systems, a deep curiosity for machine learning, and hands-on experience that positions me to contribute meaningfully to advancements in data science and AI.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-semibold">LET'S CONNECT</span>
              <div className="h-0.5 w-12 bg-primary"></div>
            </div>
            {/* Add your connection content here */}
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="mt-20 px-5 md:px-20 lg:px-40">
        <h2 className="font-bold text-sm text-primary mb-8 flex flex-row items-center">
          Skills
          <div className="ml-2 h-1 w-6 bg-primary"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              level={skill.level}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
