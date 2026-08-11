import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border-app px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-fg-subtle">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-mono text-xs text-fg-subtle">
          Built with Next.js, Tailwind CSS &amp; Framer Motion
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="card grid h-10 w-10 place-items-center rounded-full text-fg-muted hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
