import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiOutlineDownload, HiOutlineDocumentText } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { PageShell } from "@/components/portfolio/PageShell";
import { profile, skills, internships, certifications, projects, socials } from "@/data/portfolio";

const linkedInUrl = socials.find((s) => s.name === "LinkedIn")?.url;

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Mahanasri M | Download CV" },
      {
        name: "description",
        content:
          "Preview and download the resume of Mahanasri M, B.E. Computer Science and Engineering student at SNS College of Technology with a 9.08 CGPA.",
      },
      { property: "og:title", content: "Resume — Mahanasri M" },
      {
        property: "og:description",
        content: "Education, skills, projects, internships and certifications in one page.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell
      eyebrow="Resume"
      title="One page. Everything that matters."
      intro="A quick snapshot of my education, skills and experience — preview it below or download the PDF."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass h-fit p-8"
        >
          <span className="grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary neon-ring">
            <HiOutlineDocumentText className="size-7" />
          </span>
          <h2 className="mt-6 font-display text-2xl font-semibold">{profile.name}</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">{profile.tagline}</p>
          <p className="mt-5 text-sm text-muted-foreground">
            {profile.degree}
            <br />
            {profile.college}
            <br />
            CGPA {profile.cgpa} · {profile.location}
          </p>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground neon-ring"
          >
            <HiOutlineDownload className="size-4" /> Download Resume
          </motion.a>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            PDF · updated recently
          </p>

          {linkedInUrl && (
            <motion.a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground"
            >
              <FaLinkedin className="size-4 text-[#0A66C2]" />
              www.linkedin.com/in/mahanasri-m
            </motion.a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          style={{ transformPerspective: 1000 }}
          className="glass p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            Resume Preview
          </p>

          <ResumeBlock title="Education">
            <p className="text-sm text-muted-foreground">
              {profile.degree} — {profile.college} · CGPA {profile.cgpa}
            </p>
          </ResumeBlock>

          <ResumeBlock title="Technical Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Projects">
            <ul className="grid gap-1.5 text-sm text-muted-foreground">
              {projects.map((p) => (
                <li key={p.title}>
                  <span className="text-foreground">{p.title}</span> — {p.subtitle}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Internships">
            <ul className="grid gap-1.5 text-sm text-muted-foreground">
              {internships.map((i) => (
                <li key={i.company}>
                  <span className="text-foreground">{i.company}</span> — {i.role}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Certifications">
            <ul className="grid gap-1.5 text-sm text-muted-foreground">
              {certifications.map((c) => (
                <li key={c.title}>
                  <span className="text-foreground">{c.title}</span> — {c.issuer}
                </li>
              ))}
            </ul>
          </ResumeBlock>
        </motion.div>
      </div>
    </PageShell>
  );
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-7 border-t border-border/60 pt-5 first:border-0"
    >
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </motion.section>
  );
}
