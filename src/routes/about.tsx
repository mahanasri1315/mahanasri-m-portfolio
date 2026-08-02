import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal, fadeUp, stagger } from "@/components/portfolio/PageShell";
import { profile, timeline } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mahanasri M — CSE Student at SNS College of Technology" },
      {
        name: "description",
        content:
          "Learn about Mahanasri M: B.E. Computer Science and Engineering (2024–2028) at SNS College of Technology with a 9.08 CGPA, focused on full stack development and AI.",
      },
      { property: "og:title", content: "About Mahanasri M" },
      {
        property: "og:description",
        content: "Education, career objectives and journey of Mahanasri M, CSE student in Coimbatore.",
      },
    ],
  }),
  component: About,
});

const facts = [
  { label: "College", value: profile.college },
  { label: "Degree", value: profile.degree },
  { label: "Location", value: profile.location },
];

function About() {
  return (
    <PageShell eyebrow="About Me" title="Building with curiosity, code and consistency." intro={profile.about}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4">
          {facts.map((f) => (
            <motion.div key={f.label} variants={fadeUp} className="glass glass-hover p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary">
                {f.label}
              </p>
              <p className="mt-2 text-lg font-semibold">{f.value}</p>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} className="glass p-7">
            <h2 className="font-display text-xl font-semibold">Career Objective</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To grow as a full stack engineer who blends strong fundamentals with applied AI —
              building products that are fast, accessible and genuinely useful. I aim to contribute
              to impactful engineering teams while continuing to compete and practise problem
              solving daily.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative flex flex-col items-center justify-center overflow-hidden p-10 text-center purple-ring"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            className="absolute size-72 rounded-full border border-dashed border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            className="absolute size-52 rounded-full border border-dashed border-accent/40"
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">CGPA</p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mt-3 font-display text-7xl font-bold text-gradient"
          >
            {profile.cgpa}
          </motion.p>
          <p className="relative mt-3 text-xs text-muted-foreground">
            Consistent academic performance across semesters
          </p>
        </motion.div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold">My Journey</h2>
        <div className="relative mt-8 pl-6">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"
          />
          <div className="grid gap-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="relative glass glass-hover p-6">
                  <span className="absolute -left-[1.6rem] top-8 size-3 rounded-full bg-primary neon-ring" />
                  <p className="font-mono text-xs text-accent">{t.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
