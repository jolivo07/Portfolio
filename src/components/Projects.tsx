"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const filters = ["All", "Backend", "Full-Stack", "Frontend", "Mobile"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          subtitle="Projects"
          title="Things I've built"
        />

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === f
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border-app text-fg-muted hover:border-border-strong hover:text-fg"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`card group relative flex flex-col overflow-hidden rounded-2xl p-7 hover:-translate-y-1 ${
        project.featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* accent wash on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-fg-subtle">{project.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-md border border-border-app px-2.5 py-1 font-mono text-[11px] text-fg-subtle">
          {project.category}
        </span>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-fg-muted">
        {project.description}
      </p>

      <ul className="relative mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-fg-muted">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="relative mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-accent/[0.08] px-2 py-1 font-mono text-[11px] text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.repo || project.demo) && (
        <div className="relative mt-6 flex items-center gap-4 border-t border-border-app pt-5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition hover:text-accent"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
