import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-10 sm:pt-36"
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.4em] text-primary"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>
        {intro && (
          <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-muted-foreground">
            {intro}
          </motion.p>
        )}
      </motion.div>
      <div className="mt-14">{children}</div>
    </motion.main>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
