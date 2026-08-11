import { GraduationCap, Languages, Award } from "lucide-react";
import { profile, education, languages, courses } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" subtitle="About" title="Who I am" />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-fg-muted">{profile.summary}</p>

            <p className="mt-6 text-lg leading-relaxed text-fg-muted">
              I care about the decisions that only get harder to change later:
              how the domain is modeled, where boundaries sit, and how a system
              behaves when the network, the data or the requirements stop
              cooperating.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Responsible", "Adaptable", "Fast learner", "Analytical", "Efficient", "Team-oriented"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-border-app bg-surface px-3.5 py-1.5 text-sm text-fg-muted"
                  >
                    {trait}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="card rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-accent">
                  <GraduationCap className="h-[18px] w-[18px]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Education
                  </h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {education.map((e) => (
                    <li key={e.title}>
                      <p className="text-sm font-medium">{e.title}</p>
                      <p className="mt-0.5 text-sm text-fg-muted">{e.school}</p>
                      <p className="mt-0.5 font-mono text-xs text-fg-subtle">
                        {e.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-accent">
                  <Award className="h-[18px] w-[18px]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Courses
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {courses.map((c) => (
                    <li key={c.name} className="flex justify-between gap-4 text-sm">
                      <span className="text-fg-muted">{c.name}</span>
                      <span className="shrink-0 font-mono text-xs text-fg-subtle">
                        {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-accent">
                  <Languages className="h-[18px] w-[18px]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Languages
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {languages.map((l) => (
                    <li key={l.name} className="flex justify-between text-sm">
                      <span className="text-fg-muted">{l.name}</span>
                      <span className="font-mono text-xs text-fg-subtle">
                        {l.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
