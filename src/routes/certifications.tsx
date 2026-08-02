import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { PageShell } from "@/components/portfolio/PageShell";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Mahanasri M | Azure AI & NPTEL DBMS" },
      {
        name: "description",
        content:
          "Certifications earned by Mahanasri M: Microsoft Azure AI Fundamentals and NPTEL Database Management Systems.",
      },
      { property: "og:title", content: "Certifications — Mahanasri M" },
      {
        property: "og:description",
        content: "Verified certifications in cloud AI fundamentals and database management systems.",
      },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <PageShell
      eyebrow="Certifications"
      title="Credentials that back the curiosity."
      intro="Certifications earned alongside coursework, covering cloud AI fundamentals and core database systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 40, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass group relative overflow-hidden p-8 transition-shadow duration-500 hover:purple-ring"
          >
            <div
              className="absolute inset-x-0 -bottom-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "var(--gradient-neon)" }}
            />
            <motion.span
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="relative grid size-14 place-items-center rounded-2xl bg-accent/15 text-accent purple-ring"
            >
              <HiBadgeCheck className="size-7" />
            </motion.span>
            <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {c.issuer} · {c.badge}
            </p>
            <h2 className="relative mt-3 font-display text-2xl font-semibold">{c.title}</h2>
            <p className="relative mt-3 text-sm text-muted-foreground">
              Completed with hands-on assessments and applied exercises.
            </p>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
