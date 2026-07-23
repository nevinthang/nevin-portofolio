"use client";

import React from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const ContactForm = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-32 px-4 sm:px-10 md:px-20 lg:px-40" id="contact">
      <div className="relative max-w-4xl mx-auto text-center rounded-3xl border border-primary/20 bg-gradient-to-br from-gray-900 to-gray-950 px-6 py-16 sm:px-12 sm:py-20 overflow-hidden">
        {/* Graph-paper backdrop, matches the hero signal chart */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 space-y-6">
          <span className="font-mono text-xs sm:text-sm text-primary/80">
            // last stop before you decide
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Stop guessing. <span className="text-primary">Start deciding.</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            If your team is still waiting days for a report, or making calls on a
            hunch instead of a number — that's the exact problem I fix. Grab the
            resume, or find me where the rest of the proof lives.
          </p>

          {/* Primary + transitional CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="group w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>

            <a
              href="mailto:youremail@example.com"
              className="w-full sm:w-auto px-8 py-4 border border-primary/40 text-text font-bold rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
          </div>

          {/* Social proof row */}
          <div className="flex items-center justify-center gap-8 pt-6 text-sm">
            <a
              href="https://github.com/nevinthang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>

            <a
              href="https://www.linkedin.com/in/nevin-thang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text/40 border-t border-text/10 pt-6 pb-10 max-w-4xl mx-auto">
        <span>© {year} Nevin Thang — built with Next.js &amp; Tailwind</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          currently open to opportunities
        </span>
      </div>
    </div>
  );
};

export default ContactForm;