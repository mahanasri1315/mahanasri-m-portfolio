import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { HiCheck, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { PageShell } from "@/components/portfolio/PageShell";
import { profile, socials } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mahanasri M — Let's Build Something" },
      {
        name: "description",
        content:
          "Get in touch with Mahanasri M for internships, collaborations and full stack or AI project opportunities in Coimbatore and beyond.",
      },
      { property: "og:title", content: "Contact Mahanasri M" },
      {
        property: "og:description",
        content: "Send a message or connect on LinkedIn, GitHub, Instagram and YouTube.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Email: FaEnvelope,
};

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues({ name: "", email: "", message: "" });
    }, 900);
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value })),
  });

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something together."
      intro="Open to internships, collaborations and interesting problems. Drop a message and I'll get back soon."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden p-8"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-80 flex-col items-center justify-center text-center"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 240, damping: 14 }}
                  className="grid size-20 place-items-center rounded-full bg-primary/15 text-primary neon-ring"
                >
                  <HiCheck className="size-10" />
                </motion.span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-gradient">
                  Message sent!
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out — I'll reply as soon as I can.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full glass px-5 py-2.5 text-xs font-semibold"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={submit}
                className="grid gap-5"
                noValidate
              >
                <Field label="Name" error={errors["name"]}>
                  <input
                    {...field("name")}
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </Field>
                <Field label="Email" error={errors["email"]}>
                  <input
                    {...field("email")}
                    type="email"
                    maxLength={255}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </Field>
                <Field label="Message" error={errors["message"]}>
                  <textarea
                    {...field("message")}
                    rows={5}
                    maxLength={1000}
                    placeholder="What would you like to build?"
                    className="w-full resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </Field>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground neon-ring disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <motion.span animate={sending ? { x: [0, 8, 0] } : {}} transition={{ repeat: Infinity, duration: 0.8 }}>
                    <HiPaperAirplane className="size-4 rotate-90" />
                  </motion.span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass h-fit p-8"
        >
          <h2 className="font-display text-xl font-semibold">Find me online</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {profile.location} · {profile.email}
          </p>
          <div className="mt-7 grid gap-3">
            {socials.map((s) => {
              const Icon = socialIcon[s.name]!;
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-xl border border-border/60 px-4 py-3 text-sm transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="size-4" />
                  {s.name}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-destructive"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
