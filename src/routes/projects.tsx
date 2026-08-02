import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiX } from "react-icons/hi";
import { PageShell } from "@/components/portfolio/PageShell";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mahanasri M | NutriNova, AuraHeal, Learnexa" },
      {
        name: "description",
        content:
          "Projects by Mahanasri M including NutriNova smart canteen management, an interactive Quiz App, AuraHeal healthcare platform and the Learnexa LMS.",
      },
      { property: "og:title", content: "Projects — Mahanasri M" },
      {
        property: "og:description",
        content: "Full stack and AI projects built by Mahanasri M with live demos and source code.",
      },
    ],
  }),
  component: Projects,
});

function TiltCard({
  index,
  onOpen,
  project,
}: {
  index: number;
  onOpen: () => void;
  project: (typeof projects)[number];
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 12, y: px * 14 });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 200ms ease-out",
      }}
      className="glass glass-hover group relative overflow-hidden p-7"
    >
      <div
        className="absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: "var(--gradient-neon)" }}
      />
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        0{index + 1} · {project.subtitle}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold">{project.title}</h2>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={onOpen}
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
        >
          Details
        </button>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-semibold"
        >
          <HiExternalLink /> Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="grid size-9 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-accent"
        >
          <FaGithub />
        </a>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : projects[open]!;

  return (
    <PageShell
      eyebrow="Projects"
      title="Things I've designed, built and shipped."
      intro="From smart canteen operations to healthcare and learning platforms — each project pushed me deeper into full stack engineering and product thinking."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <TiltCard key={p.title} project={p} index={i} onOpen={() => setOpen(i)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/80 px-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg p-8 neon-ring"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close details"
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full glass text-muted-foreground hover:text-foreground"
              >
                <HiX />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {active.subtitle}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-gradient">
                {active.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a
                  href={active.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground"
                >
                  <HiExternalLink /> Live Demo
                </a>
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-xs font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
