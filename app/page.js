"use client";

import Image from "next/image";
import SkillsSection from "../components/skill_section.js";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import ProjectsSection from "../components/project_section.js";
import PathwaySection from "@/components/timeline_section.js";
import ContactForm from "@/components/contact_section.js";

export default function Home() {
  return (
    <div className="bg-background text-text flex flex-col min-h-screen px-4 sm:px-6 md:px-10 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center space-y-10 md:space-y-0 md:space-x-10 py-10 mt-28">
        {/* Hero Text */}
        <div className="relative w-full md:w-auto text-center md:text-left">
          {/* Blob Background */}
          <div className="rounded-full absolute -bottom-12 bg-pink-400 w-48 h-48 md:w-80 md:h-80 blur-2xl opacity-35 animate-blob z-0"></div>

          <div className="relative z-10">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              Hello, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nevin</span>
            </h1>
            <h2 className="pt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
              I'm a <span className="text-text font-semibold typewriter ml-3">Data Enthusiast</span>
            </h2>
          </div>

          <div className="space-x-5 flex mt-5 font-bold justify-center md:justify-start relative z-10">
            <button
              className="rounded-lg bg-primary py-2 px-4 md:py-3 md:px-5 text-black hover:bg-primary/80 transition"
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Know Me
            </button>
            <button
              className="rounded-lg bg-secondary py-2 px-4 md:py-3 md:px-5 hover:bg-secondary/80 transition"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 mt-10 justify-center md:justify-start z-10">
            <a href="https://github.com/nevinthang" className="text-text/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/nevin-thang" className="text-text/60 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.instagram.com/nevinthang/" className="text-text/60 hover:text-primary transition-colors">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-background rounded-2xl">
            <Image src="/images/photo2.png" alt="Nevin's portrait" fill className="rounded-2xl object-cover " />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto mt-20 widget">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About Image */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <Image src="/images/fluid.png" alt="Nevin's portrait" className="rounded-2xl object-cover contrast-50" fill />
            </div>
          </div>
          {/* About Text */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              {/* About Header */}
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold" id="about">
                  ABOUT ME
                </span>
                <div className="h-0.5 w-12 bg-primary"></div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold italic leading-tight">
                Turning data into decisions, <span className="text-primary">one insight at a time.</span>
              </blockquote>

              {/* Description */}
              <p className="text-text/70 leading-relaxed text-sm sm:text-base">
                Driven by a passion for exploring the potential of data-driven solutions and AI technologies. Proficient in Python and C++ programming, with a proven track record in IT-related competitions and organizational roles. Equipped
                with a solid foundation in informatics systems, a deep curiosity for machine learning, and hands-on experience that positions me to contribute meaningfully to advancements in data science and AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section*/}
      <ProjectsSection />

      {/* Timeline Section */}
      <PathwaySection />

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}
