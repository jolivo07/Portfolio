import {
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  server: Server,
  layers: Layers,
  database: Database,
  code: Code2,
  smartphone: Smartphone,
  cloud: Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          subtitle="Skills"
          title="What I build with"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="card group h-full rounded-2xl p-6 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border-app bg-surface text-accent">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="font-medium tracking-tight">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border-app px-2.5 py-1 font-mono text-xs text-fg-muted transition group-hover:border-border-strong"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
