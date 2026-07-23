import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }) {
  // params may be a Promise — unwrap it per Next's streaming API
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Debug logs: prints requested slug and available slugs to server terminal
  try {
    // eslint-disable-next-line no-console
    console.log('[case-study] requested slug:', slug);
    // eslint-disable-next-line no-console
    console.log('[case-study] available slugs:', projects.map((p) => p.slug).join(', '));
  } catch (e) {}

  const project = getProjectBySlug(slug);
  if (!project) {
    return (
      <div className="bg-background text-text min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 pt-32 pb-24">
        <h2 className="text-2xl font-bold mb-4">Project not found: {params.slug}</h2>
        <p className="text-text/70 mb-6">Available projects:</p>
        <ul className="list-disc pl-6 space-y-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="text-primary underline">
                {p.slug} — {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-background text-text min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 pt-32 pb-24">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-text/50 hover:text-primary transition-colors mb-10"
      >
        <FaArrowLeft className="w-3 h-3" />
        back to case files
      </Link>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs text-primary/70">
          CASE FILE {project.number} / {String(projects.length).padStart(2, "0")}
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">{project.title}</h1>
        <p className="mt-4 text-primary text-lg font-semibold">→ {project.tagline}</p>
      </div>

      {/* Hero image */}
      <div className="relative mt-12 h-64 sm:h-96 md:h-[520px] rounded-2xl overflow-hidden border border-primary/10">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-10 border-t border-b border-text/10 py-6 text-center">
        {project.metrics.map((m, i) => (
          <div key={i} className="border-l-2 border-primary/40 pl-3 sm:pl-4">
            <div className="font-mono text-lg sm:text-2xl font-bold text-primary">{m.value}</div>
            <div className="text-xs text-text/60 leading-snug">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Problem / Approach / Result — full room to breathe */}
      <div className="max-w-3xl mt-16 space-y-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-3 sm:gap-8">
          <p className="font-mono text-xs text-primary/70">01 — PROBLEM</p>
          <p className="text-lg sm:text-xl leading-relaxed text-text/90">{project.caseStudy.problem}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-3 sm:gap-8">
          <p className="font-mono text-xs text-primary/70">02 — APPROACH</p>
          <p className="text-lg sm:text-xl leading-relaxed text-text/90">{project.caseStudy.approach}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-3 sm:gap-8">
          <p className="font-mono text-xs text-primary/70">03 — RESULT</p>
          <p className="text-lg sm:text-xl leading-relaxed text-text/90">{project.caseStudy.result}</p>
        </div>
      </div>

      {/* Stack + links */}
      <div className="max-w-3xl mt-16 pt-8 border-t border-text/10 mx-auto text-center">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs rounded-full bg-gray-900/80 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-8 justify-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text/70 hover:text-primary transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text/70 hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Next case file */}
      <Link href={`/work/${nextProject.slug}`} className="group mt-36 max-w-3xl mx-auto border-t border-text/10 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6  mt-20">
          <div className="text-center">
            <p className="font-mono text-xs text-text/40 mb-1">NEXT CASE FILE</p>
            <p className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">{nextProject.title}</p>
          </div>
          <span className="font-mono text-primary transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>
    </div>
  );
}