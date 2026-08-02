import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiOutlineDownload } from "react-icons/hi";
import { Hero3D } from "@/components/portfolio/Background";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahanasri M — Full Stack Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Mahanasri M, Computer Science Engineering student at SNS College of Technology — full stack developer, AI enthusiast and problem solver.",
      },
      { property: "og:title", content: "Mahanasri M — Full Stack Developer & AI Enthusiast" },
      {
        property: "og:description",
        content:
          "Futuristic portfolio showcasing projects, internships, certifications and coding profiles of Mahanasri M.",
      },
    ],
  }),
  component: Hero,
});

const words = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];

function Typer() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length]!;
    const done = text === current;
    const delay = deleting ? 45 : done ? 1400 : 80;

    const t = setTimeout(() => {
      if (!deleting && done) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}

function Hero() {
  const name = profile.name.split("");

  return (
    <main className="relative z-10">
      <section className="relative flex min-h-screen items-center px-5">
        <div className="absolute inset-0 -z-0 opacity-90">
          <Hero3D />
        </div>

        <div className="pointer-events-none relative mx-auto w-full max-w-7xl pt-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-xs uppercase tracking-[0.45em] text-accent"
          >
            {profile.role}
          </motion.p>

          <h1 className="mt-6 flex flex-wrap font-display text-5xl font-bold leading-[1.02] sm:text-7xl md:text-8xl">
            {name.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                initial={{ opacity: 0, y: 60, rotateX: -80, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.25 + i * 0.045, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 text-lg sm:text-2xl"
          >
            <Typer />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.degree} · {profile.college} · CGPA {profile.cgpa} · {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="pointer-events-auto mt-10 flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground neon-ring"
              >
                View Projects
                <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground"
              >
                <HiOutlineDownload /> Resume
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-sm font-semibold text-accent purple-ring"
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            scroll
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-5">
        <div className="animate-marquee flex w-max gap-10 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {[
                "React",
                "Python",
                "Java",
                "C++",
                "JavaScript",
                "SQL",
                "Git",
                "AI / ML",
                "Full Stack",
                "Problem Solving",
              ].map((t) => (
                <span key={t} className="text-foreground/60">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
