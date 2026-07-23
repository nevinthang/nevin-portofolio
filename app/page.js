"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SkillsSection from "../components/skill_section.js";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import ProjectsSection from "../components/project_section.js";
import PathwaySection from "@/components/timeline_section.js";
import ContactForm from "@/components/contact_section.js";

// Scattered points that settle into an ascending "signal" line on mount.
const SIGNAL_POINTS = [
  { x: 6, yEnd: 82, yStart: 55 },
  { x: 19, yEnd: 74, yStart: 15 },
  { x: 32, yEnd: 63, yStart: 70 },
  { x: 45, yEnd: 66, yStart: 28 },
  { x: 58, yEnd: 47, yStart: 82 },
  { x: 71, yEnd: 36, yStart: 18 },
  { x: 84, yEnd: 22, yStart: 62 },
  { x: 94, yEnd: 12, yStart: 40 },
];

function SignalChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const linePoints = SIGNAL_POINTS.map((p) => `${p.x},${p.yEnd}`).join(" ");

  return (
    <div className="relative w-full h-72 sm:h-80 md:h-[420px]">
      <div
        className="absolute inset-0 rounded-2xl opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "12.5% 12.5%",
        }}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5" />

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--tw-gradient-from, currentColor)" className="text-primary" />
            <stop offset="100%" className="text-accent" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <polyline
          points={linePoints}
          fill="none"
          stroke="url(#signalGradient)"
          strokeWidth="0.6"
          strokeLinecap="round"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: mounted ? 0 : 300,
            transition: "stroke-dashoffset 1.1s ease-out 0.7s",
          }}
        />
      </svg>

      {SIGNAL_POINTS.map((p, i) => (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 transition-all ease-out"
          style={{
            left: `${p.x}%`,
            top: mounted ? `${p.yEnd}%` : `${p.yStart}%`,
            opacity: mounted ? 1 : 0.35,
            transitionDuration: "700ms",
            transitionDelay: `${i * 90}ms`,
          }}
        />
      ))}

      <div
        className="absolute top-[6%] right-[2%] font-mono text-[10px] sm:text-xs bg-background/90 border border-primary/30 text-primary rounded-md px-2 py-1 shadow-lg transition-all duration-500"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-6px)",
          transitionDelay: "1.4s",
        }}
      >
        insight found →
      </div>

      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2 font-mono text-[10px] text-text/40">
        <span>Q1 — RAW DATA</span>
        <span>Q4 — CLEAR SIGNAL</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-text flex flex-col min-h-screen px-4 sm:px-6 md:px-10 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 md:gap-10 py-16 md:py-10 mt-28 max-w-7xl mx-auto">
        <div className="relative w-full md:w-1/2 text-left">
          <div className="rounded-full absolute -bottom-12 -left-10 bg-pink-400 w-48 h-48 md:w-80 md:h-80 blur-2xl opacity-25 animate-blob z-0"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-primary border border-primary/30 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              currently decoding: your data
              <span className="animate-pulse">_</span>
            </div>

            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Your data has answers.
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your reports just aren&apos;t asking.
              </span>
            </h1>

            <div className="space-y-2 text-text/70 text-sm sm:text-base max-w-md">
              <p>Fragmented databases. Slow reports. Blind spots hiding your next move.</p>
              <p>
                I architect the pipelines and interactive dashboards that fix that — so your 
                business runs on facts, not guesswork.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 font-bold pt-2">
              <button
                className="rounded-lg bg-primary py-3 px-5 text-black hover:bg-primary/80 transition"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See the Proof
              </button>
              <button
                className="rounded-lg bg-secondary py-3 px-5 hover:bg-secondary/80 transition"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let&apos;s Fix Your Data
              </button>
            </div>

            <p className="font-mono text-xs text-text/50 pt-1">
              Automated Pipelines <span className="text-primary">·</span> Clear Analytics{" "}
              <span className="text-primary">·</span> Confident Calls
            </p>

            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-text/60">
                Guide: <span className="text-text font-semibold">Nevin Thang</span>
              </span>
              <div className="flex gap-5">
                <a href="https://github.com/nevinthang" className="text-text/60 hover:text-primary transition-colors">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/nevin-thang" className="text-text/60 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.instagram.com/nevinthang/" className="text-text/60 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <SignalChart />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16" id="about">
            <span className="font-mono text-xs sm:text-sm text-primary/80 mb-3">
              // not the hero of this story
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              TH3 <span className="text-primary">GU1DE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Portrait */}
            <div className="flex justify-center">
              <div className="group relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary/50 z-10"></div>
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary/50 z-10"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20">
                  <Image
                    src="/images/photo2.png" // Pastikan nama file foto lu bener di sini
                    alt="Nevin Thang"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    fill
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-3 py-2 font-mono text-[10px] text-text/60 flex justify-between">
                    <span>FIG. 01 — NEVIN THANG</span>
                    <span className="text-primary">DATA ENGINEER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-2">
              <div className="space-y-8">
                <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold italic leading-tight">
                  I don&apos;t do data for the sake of data.{" "}
                  <span className="text-primary">I build systems so your team stops drowning in spreadsheets.</span>
                </blockquote>

                <div className="space-y-3 text-text/70 leading-relaxed text-sm sm:text-base max-w-xl">
                  <p>
                    Manual reports that take days. Numbers nobody trusts. Hours wasted on data prep instead of actual analysis. 
                    I engineer the pipelines and build the BI dashboards that make those bottlenecks disappear.
                  </p>
                  <p>
                    Recently, that meant architecting a warehouse-to-reporting pipeline at <span className="text-text font-medium">PT Reasuransi Nasional</span> to 
                    cut manual prep time by 50%, and automating regional settlement workflows at <span className="text-text font-medium">FedEx Express</span> to 
                    give back ~20 hours a month to the operations team.
                  </p>
                </div>

                {/* Proof strip */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl pt-2">
                  <div className="border-l-2 border-primary/40 pl-3">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-primary">50%</div>
                    <div className="text-xs text-text/60 leading-snug">less time prepping reports</div>
                  </div>
                  <div className="border-l-2 border-primary/40 pl-3">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-primary">20hr</div>
                    <div className="text-xs text-text/60 leading-snug">manual work saved monthly</div>
                  </div>
                  <div className="border-l-2 border-primary/40 pl-3">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-primary">NUS</div>
                    <div className="text-xs text-text/60 leading-snug">Fellow, Data-Centric AI</div>
                  </div>
                </div>

                {/* Role log */}
                <div className="font-mono text-xs sm:text-sm text-text/60 border-t border-text/10 pt-4 space-y-1.5 max-w-xl">
                  <p className="flex justify-between">
                    <span><span className="text-primary">›</span> FedEx Express — Operations Intern</span>
                    <span className="text-text/40">current</span>
                  </p>
                  <p className="flex justify-between">
                    <span><span className="text-primary/60">›</span> NUS — AI & Research Fellow</span>
                  </p>
                  <p className="flex justify-between">
                    <span><span className="text-primary/60">›</span> PT Reasuransi Nasional — Data Analyst Intern</span>
                  </p>
                  <p className="flex justify-between">
                    <span><span className="text-primary/60">›</span> Magpie — Data QA Freelance</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SkillsSection />

      <div id="projects">
        <ProjectsSection />
      </div>

      <PathwaySection />

      <ContactForm />
    </div>
  );
}