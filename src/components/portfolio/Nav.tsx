import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, profile, socials } from "@/data/portfolio";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Email: FaEnvelope,
};

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-primary/15 font-display text-sm font-bold text-primary neon-ring">
            MS
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-[0.22em] text-foreground/80 sm:block">
            MAHANASRI
          </span>
        </Link>

        <nav className="glass hidden items-center gap-1 px-2 py-1.5 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-primary/15" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 md:flex">
            {socials.slice(0, 3).map((s) => {
              const Icon = socialIcon[s.name]!;
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -3, scale: 1.12 }}
                  className="grid size-9 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                </motion.a>
              );
            })}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-xl glass text-foreground lg:hidden"
          >
            {open ? <HiX className="size-5" /> : <HiMenuAlt3 className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 grid gap-1 rounded-2xl glass p-3 lg:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground"
                  activeProps={{ className: "text-foreground bg-primary/15" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border/60 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = socialIcon[s.name]!;
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                whileHover={{ y: -4, scale: 1.15 }}
                className="grid size-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-accent"
              >
                <Icon className="size-4" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
