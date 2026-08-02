import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/portfolio/PageShell";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mahanasri M | C, C++, Java, Python, Web & SQL" },
      {
        name: "description",
        content:
          "Technical skills of Mahanasri M: C, C++, Java, Python, HTML, CSS, JavaScript, SQL, Git and GitHub with proficiency levels.",
      },
      { property: "og:title", content: "Skills — Mahanasri M" },
      {
        property: "og:description",
        content: "Programming languages, web technologies and tools Mahanasri M works with.",
      },
    ],
  }),
  component: Skills,
});

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame++;
      setN(Math.round((to * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [inView, to]);

  return <span ref={ref}>{n}%</span>;
}

function Skills() {
  return (
    <PageShell
      eyebrow="Skills"
      title="A toolkit tuned for building and solving."
      intro="Languages, web technologies and tools I use to design, build and ship — sharpened through projects, internships and daily problem solving."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.article
            key={s.name}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass glass-hover group p-6"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-xl font-semibold">{s.name}</h2>
              <span className="font-mono text-sm text-primary">
                <Counter to={s.level} />
              </span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-secondary/70">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-neon)" }}
              />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition-colors group-hover:text-accent">
              {s.level >= 88 ? "Advanced" : s.level >= 82 ? "Proficient" : "Comfortable"}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {[
          { label: "Languages", value: skills.length },
          { label: "Projects Built", value: 4 },
          { label: "Internships", value: 3 },
        ].map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-7 text-center"
          >
            <p className="font-display text-4xl font-bold text-gradient">{c.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {c.label}
            </p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
