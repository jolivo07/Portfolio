import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          subtitle="Experience"
          title="Where I've worked"
        />

        <div className="relative">
          {/* timeline rail */}
          <span
            className="absolute left-[19px] top-2 bottom-2 w-px bg-border-app md:left-[23px]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="relative flex gap-6">
                  <span
                    className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-bg text-accent md:h-12 md:w-12 ${
                      job.current
                        ? "border-accent shadow-[0_0_0_4px_var(--accent-glow)]"
                        : "border-border-strong"
                    }`}
                  >
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                  </span>

                  <div className="card flex-1 rounded-2xl p-6 md:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      <span
                        className={`font-mono text-xs ${
                          job.current
                            ? "rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent"
                            : "text-fg-subtle"
                        }`}
                      >
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-accent">{job.company}</p>

                    <ul className="mt-5 space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-fg-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
