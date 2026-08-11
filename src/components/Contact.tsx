import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" subtitle="Contact" title="Let's talk" />

        <Reveal>
          <div className="card relative overflow-hidden rounded-3xl p-8 md:p-14">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Looking for a backend or full-stack engineer?
                </h3>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  I&apos;m open to Backend, .NET, Software Engineer and Full-Stack
                  roles — on site in Barranquilla or remote. Send me a message and
                  I&apos;ll get back to you.
                </p>

                <a
                  href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:text-[#05070d]"
                >
                  <Mail className="h-4 w-4" />
                  Send me an email
                </a>
              </div>

              <ul className="space-y-3">
                {[
                  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                  { Icon: Github, label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), href: profile.github },
                  { Icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\//, ""), href: profile.linkedin },
                  { Icon: MapPin, label: "Location", value: profile.location, href: undefined },
                ].map(({ Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border-app bg-surface text-accent">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                          {label}
                        </span>
                        <span className="block truncate text-sm text-fg-muted">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 rounded-2xl border border-border-app p-3 transition hover:border-accent/50 hover:bg-accent/[0.04]"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-border-app p-3">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
