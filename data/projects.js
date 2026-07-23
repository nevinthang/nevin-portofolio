import { Code2, Smartphone } from 'lucide-react';

export const projects = [
  {
    slug: 'portfolio-website',
    number: '01',
    title: 'Portfolio Website',
    tagline: 'First impression, solved in one scroll.',
    description: 'A personal portfolio built to be remembered, not just viewed.',
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    image: '/images/porto.png',
    github: 'https://github.com/nevinthang/nevin-portofolio',
    live: 'https://nevin-thang.vercel.app/',
    featured: true,
    metrics: [
      { label: 'Stack', value: 'Next.js' },
      { label: 'Status', value: 'Live' },
      { label: 'Type', value: 'Solo' },
    ],
    caseStudy: {
      problem:
        'A portfolio that reads like a résumé gets skimmed for six seconds and closed. It needed a reason for a recruiter to actually stay.',
      approach:
        'Built as an interactive, story-driven site instead of a template — Next.js and Tailwind, with copy and motion designed around a single clear hook, not a features list.',
      result:
        'A site that gets remembered instead of just viewed — live and deployed on Vercel.',
    },
  },
  {
    slug: 'balink',
    number: '02',
    title: 'Balink',
    tagline: 'Booking a ride in Bali: group chats → two taps.',
    description: 'A web and mobile platform for renting transportation in Bali.',
    tags: ['Python', 'Dart', 'Django', 'Flutter', 'Tailwind CSS'],
    image: '/images/porto2.png',
    github: 'https://github.com/B09-PBP/balink',
    live: 'https://nevin-thang-balink.pbp.cs.ui.ac.id/',
    featured: true,
    metrics: [
      { label: 'Platforms', value: 'Web + Mobile' },
      { label: 'Backend', value: 'Django' },
      { label: 'Type', value: 'Team' },
    ],
    caseStudy: {
      problem:
        'Renting transportation in Bali usually meant scattered WhatsApp threads, unclear pricing, and no single place to actually book.',
      approach:
        'Built a full booking platform end to end — Django backend, Flutter mobile app, Tailwind web front-end — covering listings, booking, and confirmation in one flow.',
      result:
        'A working, deployed platform travelers can book through directly — no more back-and-forth messaging.',
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export default projects;