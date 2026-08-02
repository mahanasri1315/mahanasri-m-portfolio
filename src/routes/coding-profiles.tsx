import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import { PageShell } from "@/components/portfolio/PageShell";
import { codingProfiles, codingStats } from "@/data/portfolio";

export const Route = createFileRoute("/coding-profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Mahanasri M | SkillRack, LeetCode, GitHub" },
      {
        name: "description",
        content:
          "Coding profiles of Mahanasri M across SkillRack (primary platform), LeetCode, GitHub and LinkedIn, with problem solving statistics.",
      },
      { property: "og:title", content: "Coding Profiles — Mahanasri M" },
      {
        property: "og:description",
        content: "Daily problem solving on SkillRack and LeetCode, plus open source work on GitHub.",
      },
    ],
  }),
  component: CodingProfiles,
});

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: FaGithub,
  LeetCode: SiLeetcode,
  LinkedIn: FaLinkedin,
};

function CodingProfiles() {
  const { skillrack, others } = codingProfiles;

  return (
    <PageShell
      eyebrow="Coding Profiles"
      title="Practice is the real portfolio."
      intro="SkillRack is my primary training ground for daily problem solving, backed by LeetCode for DSA depth and GitHub for building in public."
    >
      <motion.a
        href={skillrack.url}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8 }}
        className="glass group relative block overflow-hidden p-10 neon-ring"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-dashed border-primary/25"
        />
        <span className="grid size-16 place-items-center rounded-2xl bg-primary/15 text-primary neon-ring">
          <FaCode className="size-7" />
        </span>
        <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
          Primary Platform
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-gradient sm:text-5xl">
          {skillrack.name}
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">{skillrack.note}</p>
        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground">
          Visit SkillRack Profile
          <HiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </motion.a>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {others.map((p, i) => {
          const Icon = icons[p.name]!;
          return (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: -1 }}
              className="glass glass-hover group p-7"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                Open <HiArrowUpRight />
              </span>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {codingStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass p-7 text-center"
          >
            <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
