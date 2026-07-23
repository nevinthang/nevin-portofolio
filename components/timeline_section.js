'use client';

import React, { useState } from 'react';
import { Briefcase, ShieldCheck, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Operations Intern',
    org: 'FedEx Express International',
    period: 'Jun 2026 – Aug 2026',
    bullets: [
      'Built a Power BI dashboard tracking partner performance across APAC — giving the region real-time visibility it didn\u2019t have before.',
      'Automated contra settlement workflows with Power Platform, saving ~20 hours of manual work a month.',
      'Drafted PRDs and ran sprints with APAC stakeholders to find process gaps and ship the fix.',
    ],
    tags: ['Power BI', 'Power Automate', 'PRDs'],
  },
  {
    id: 2,
    type: 'work',
    title: 'Data Analyst Intern',
    org: 'PT Reasuransi Nasional Indonesia',
    period: 'Dec 2025 – May 2026',
    bullets: [
      'Architected a warehouse-to-reporting pipeline, cutting manual prep time by 50%.',
      'Built a Python risk-scoring model for 50+ ceding companies using financials and news sentiment.',
      'Wrote recurring reports across 8+ business classes for executive review, saving ~5 hours/week.',
    ],
    tags: ['Python', 'Power BI', 'Risk Modeling'],
  },
  {
    id: 3,
    type: 'freelance',
    title: 'Data Quality Assurance Freelance',
    org: 'Magpie (Singapore / Remote)',
    period: 'Sep 2025 – Nov 2025',
    bullets: [
      'Audited 5,000+ records across multiple datasets, hitting 99% accuracy for analytics and ML pipelines.',
      'Restructured annotation workflows across 2 ML projects, cutting labeling turnaround by ~25%.',
    ],
    tags: ['Data QA', 'Annotation'],
  },
  {
    id: 4,
    type: 'academic',
    title: 'Research & Teaching Assistant',
    org: 'Universitas Indonesia',
    period: 'Jul 2024 – Present',
    bullets: [
      'Research: analyzed spatial data to identify ecological patterns at the MLCV Lab (environmental remote sensing).',
      'Teaching: supported 4 courses — AI & Data Science, Platform-Based Programming, DSA, Programming Foundations — grading 100+ assignments weekly.',
    ],
    tags: ['Remote Sensing', 'Teaching'],
    credential: 'B.S. Information Systems, Universitas Indonesia (2023–present)',
    achievement: '3rd Winner — Falcon x Qatar Airways AI Competition',
  },
];

const typeIcon = {
  work: Briefcase,
  freelance: ShieldCheck,
  academic: GraduationCap,
};

const TimelineCard = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = typeIcon[experience.type];

  return (
    <div
      className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:items-center group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <div className="w-px h-full bg-gradient-to-b from-primary/50 to-accent/50" />
      </div>

      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'} mb-8`}>
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 transition-all duration-300 hover:border-primary/50">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div className="absolute -left-4 md:left-auto md:right-0 top-8 transform md:translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center z-10">
            <Icon className={`w-4 h-4 ${isHovered ? 'text-primary' : 'text-gray-400'} transition-colors duration-300`} />
          </div>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-primary">{experience.period}</span>
              <span className="font-mono text-[10px] text-text/30">
                {String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold">{experience.title}</h3>
              <div className="text-gray-400 font-medium text-sm">{experience.org}</div>
            </div>

            <div className="space-y-1.5 pt-1">
              {experience.bullets.map((b, i) => (
                <p key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                  <span className="text-primary flex-shrink-0">›</span>
                  <span>{b}</span>
                </p>
              ))}
            </div>

            {experience.tags && (
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {experience.credential && (
              <div className="pt-3 mt-3 border-t border-text/10 space-y-1.5">
                <p className="text-xs text-text/50">{experience.credential}</p>
                {experience.achievement && (
                  <p className="text-xs text-primary flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    {experience.achievement}
                  </p>
                )}
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
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />

      <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs sm:text-sm text-primary/80 mb-3">// receipts, not adjectives</span>
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold">
          TR4CK <span className="text-primary">RECORD</span>
        </h2>
        <p className="mt-6 text-gray-400">
          What I actually shipped, in the order I shipped it.
        </p>
      </div>

      <div className="mt-20 relative">
        {experiences.map((experience, index) => (
          <TimelineCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PathwaySection;