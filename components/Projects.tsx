"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AICredits",
    url: "https://aicredits.in",
    displayUrl: "AICredits.in",
    tag: "Live Product",
    live: true,
    description:
      "Production LLM API gateway supporting multi-provider routing (OpenAI, Anthropic, and more) with a credit-based billing and usage tracking system. Built and deployed end to end.",
    tags: ["Python", "LLM Routing", "PostgreSQL", "API Gateway", "Billing System"],
    featured: true,
  },
  {
    title: "MasterPrompting",
    url: "https://masterprompting.net",
    displayUrl: "MasterPrompting.net",
    tag: "Live Product",
    live: true,
    description:
      "Free structured prompt engineering learning platform for ChatGPT, Claude, and Gemini. Curriculum-based tracks grounded in official OpenAI and Anthropic documentation.",
    tags: ["Next.js", "Prompt Engineering", "OpenAI", "Anthropic", "Education"],
    featured: true,
  },
  {
    title: "PayViaUPI",
    url: "https://payviaupi.com",
    displayUrl: "PayViaUPI.com",
    tag: null,
    live: false,
    description:
      "Generate shareable UPI payment links and dynamic QR codes for simplified P2P payments.",
    tags: ["Next.js", "JavaScript"],
    featured: false,
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6.5M11.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const small = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Projects
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Things I&apos;ve built and shipped.
          </h3>

          {/* Featured grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {featured.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 transition-all hover:bg-[var(--surface-hover)]"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    {project.live && (
                      <span className="w-2 h-2 rounded-full bg-[var(--green)] green-dot shrink-0" />
                    )}
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {project.tag}
                    </span>
                  </div>
                  <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    <ExternalIcon />
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-[var(--fg)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h4>
                <p className="font-mono text-xs text-[var(--muted)] mb-3">
                  {project.displayUrl}
                </p>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Small projects */}
          <div className="grid gap-4">
            {small.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-all hover:bg-[var(--surface-hover)]"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-base font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h4>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {project.displayUrl}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors ml-4 shrink-0">
                  <ExternalIcon />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
