'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Database,
  BarChart3,
  Workflow,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const stack = [
  { index: '01', icon: Code2, title: 'Languages', tools: ['Python', 'SQL'] },
  {
    index: '02',
    icon: BrainCircuit,
    title: 'Data, ML & NLP',
    tools: ['Pandas', 'NumPy', 'Scikit-learn', 'Beautiful Soup', 'E5-small', 'IndoBERTweet'],
  },
  {
    index: '03',
    icon: Database,
    title: 'Databases & Warehouses',
    tools: ['PostgreSQL', 'Snowflake', 'DBeaver', 'PL/SQL', 'AWS (S3)', 'GCP (BigQuery)'],
  },
  {
    index: '04',
    icon: BarChart3,
    title: 'BI & Visualization',
    tools: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Excel'],
  },
  {
    index: '05',
    icon: Workflow,
    title: 'Pipeline & Infrastructure',
    tools: ['Apache Airflow', 'Prefect', 'Docker', 'Git', 'GitHub'],
  },
  {
    index: '06',
    icon: Zap,
    title: 'Business Process Automation',
    tools: ['Power Apps', 'Power Automate', 'SharePoint'],
  },
];

const AUTO_ADVANCE_MS = 4200;
const SPACING = 210; // px between card centers
const MAX_VISIBLE_OFFSET = 2;

const StackCard = ({ stage, offset, onClick, reducedMotion }) => {
  const absOffset = Math.abs(offset);
  if (absOffset > MAX_VISIBLE_OFFSET) return null;

  const isActive = offset === 0;
  const Icon = stage.icon;

  return (
    <div className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
      <motion.div
        onClick={onClick}
        className={`relative w-[230px] sm:w-[270px] rounded-2xl border p-5 sm:p-6 select-none
        bg-gradient-to-br from-surface-900 to-surface-950
        ${isActive ? 'border-primary/60 shadow-2xl shadow-primary/10 cursor-default' : 'border-surface-800 hover:border-primary/40 cursor-pointer'}`}
        style={{ transformPerspective: 1200 }}
        animate={
          reducedMotion
            ? { x: offset * SPACING, opacity: absOffset === 0 ? 1 : 0.3, scale: isActive ? 1 : 0.9 }
            : {
                x: offset * SPACING,
                rotateY: offset * -28,
                z: -absOffset * 110,
                scale: isActive ? 1 : 0.8,
                opacity: 1 - absOffset * 0.32,
              }
        }
        initial={false}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      >
      <div className="flex items-center justify-between mb-5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300 ${
            isActive ? 'bg-primary/15 border-primary/30' : 'bg-primary/5 border-primary/10'
          }`}
        >
          <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text/40'}`} />
        </div>
        <span className="font-mono text-xs text-text/30">{stage.index} / 06</span>
      </div>

      <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isActive ? 'text-text' : 'text-text/50'}`}>
        {stage.title}
      </h3>

      <div
        className={`flex flex-wrap gap-2 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {stage.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-text/15 px-2.5 py-1 text-xs font-mono text-text/60"
          >
            {tool}
          </span>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const total = stack.length;
  const timerRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  // Shortest signed distance so the carousel always spins the short way
  const offsetFor = (i) => {
    let diff = i - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="mt-20 px-4 sm:px-10" id="skills">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs sm:text-sm text-primary/80 mb-3">// THE STACK</span>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          THE <span className="text-primary">ST4CK</span>
        </h2>
        <p className="mt-4 text-text/60 text-sm sm:text-base">
          Every tool here has a job. This is what moves data from raw tables
          to a decision someone actually acts on.
        </p>
      </div>

      {/* 3D pipeline carousel */}
      <div
        className="relative mt-14 h-[300px] sm:h-[340px] max-w-6xl mx-auto"
        style={{ perspective: '1400px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev();
          if (e.key === 'ArrowRight') next();
        }}
        tabIndex={0}
        role="region"
        aria-label="Skills stack carousel"
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {stack.map((stage, i) => (
            <StackCard
              key={stage.index}
              stage={stage}
              offset={offsetFor(i)}
              onClick={() => setActive(i)}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Edge fades so cards feel like they exit into depth, not a hard clip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-20" />

        {/* Nav arrows */}
        <button
          onClick={prev}
          aria-label="Previous stage"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-primary/30 bg-background/80 backdrop-blur flex items-center justify-center text-text/60 hover:text-primary hover:border-primary/60 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next stage"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-primary/30 bg-background/80 backdrop-blur flex items-center justify-center text-text/60 hover:text-primary hover:border-primary/60 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stage indicators — same numbering language as the rest of the site */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {stack.map((stage, i) => (
          <button
            key={stage.index}
            onClick={() => setActive(i)}
            aria-label={`Go to ${stage.title}`}
            className="group px-1.5 py-1"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-primary' : 'w-3 bg-text/20 group-hover:bg-text/40'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;