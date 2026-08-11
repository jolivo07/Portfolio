import { Reveal } from "./Reveal";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-10 bg-border-strong" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
          {subtitle}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
