"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-6 pt-28 pb-20 md:pt-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs text-fg-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm text-accent md:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tight"
        >
          {profile.fullName.split(" ").slice(0, 2).join(" ")}
          <span className="block gradient-text">
            {profile.fullName.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-xl text-fg-muted sm:text-2xl md:text-3xl"
        >
          {profile.role}{" "}
          <span className="font-mono text-base text-fg-subtle sm:text-lg">
            / {profile.tagline}
          </span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:text-[#05070d]"
          >
            View my work
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <div className="flex items-center gap-2">
            {[
              { href: profile.github, Icon: Github, label: "GitHub" },
              { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="card grid h-11 w-11 place-items-center rounded-full text-fg-muted hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 flex items-center gap-2 text-sm text-fg-subtle"
        >
          <MapPin className="h-4 w-4" />
          {profile.location}
        </motion.p>

        <motion.dl
          variants={item}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-app bg-border-app md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-5 py-6">
              <dt className="text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-fg-subtle md:text-sm">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
