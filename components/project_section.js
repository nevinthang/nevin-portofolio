"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

function ProjectRow({ project, reversed }) {
  const router = useRouter();
  const go = () => router.push(`/work/${project.slug}`);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      className="group block relative cursor-pointer"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-16 border-b border-text/10">
        <span
          className="pointer-events-none absolute -top-6 md:-top-10 select-none font-bold text-text/[0.04] leading-none text-[7rem] sm:text-[10rem] md:text-[13rem]"
          style={{ right: reversed ? 0 : undefined, left: reversed ? undefined : 0 }}
        >
          {project.number}
        </span>

        <div className={"relative z-10 md:col-span-6 h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden " + (reversed ? "md:order-2" : "")}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent z-10" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className={"relative z-10 md:col-span-6 space-y-4 " + (reversed ? "md:order-1" : "")}>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-900/80 text-primary border border-primary/20">{tag}</span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-primary text-sm font-semibold">→ {project.tagline}</p>
          <p className="text-gray-400 text-sm max-w-md">{project.description}</p>

          <div className="flex items-center gap-6 pt-2">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-text/50 group-hover:text-primary transition-colors">
              Open Case File
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs sm:text-sm text-primary/80 mb-3">// the proof you clicked for</span>
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold">CASE <span className="text-primary">F1LES</span></h2>
        <p className="mt-6 text-gray-400 max-w-2xl">Real problems, real fixes, real numbers. Open a file for the full breakdown.</p>
      </div>

      <div className="mt-16">
        {featured.map((project, i) => (
          <ProjectRow key={project.slug} project={project} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
