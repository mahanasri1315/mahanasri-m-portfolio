import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { PageShell, Reveal } from "@/components/portfolio/PageShell";
import { internships } from "@/data/portfolio";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — Mahanasri M | Data Analysis & Full Stack" },
      {
        name: "description",
        content:
          "Internship experience of Mahanasri M at Gateway Software Solutions, Eduspine and Synovers across data analysis and full stack development.",
      },
      { property: "og:title", content: "Internships — Mahanasri M" },
      {
        property: "og:description",
        content: "Hands-on industry experience in data analysis and full stack development.",
      },
    ],
  }),
  component: Internships,
});

function Internships() {
  return (
    <PageShell
      eyebrow="Internships"
      title="Experience earned in real engineering teams."
      intro="Three internships across data analysis and full stack development — shipping features, querying real data and learning how production teams work."
    >
      <div className="relative pl-7">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute left-1 top-0 w-px bg-gradient-to-b from-accent via-primary to-transparent"
        />
        <div className="grid gap-7">
          {internships.map((it, i) => (
            <Reveal key={it.company} delay={i * 0.1}>
              <motion.div whileHover={{ x: 8 }} className="relative glass glass-hover p-7">
                <span className="absolute -left-[1.85rem] top-9 grid size-6 place-items-center rounded-full bg-accent/20 text-accent purple-ring">
                  <HiBriefcase className="size-3" />
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {it.role}
                </p>
                <h2 className="mt-2.5 font-display text-2xl font-semibold">{it.company}</h2>
                <ul className="mt-4 grid gap-2">
                  {it.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
