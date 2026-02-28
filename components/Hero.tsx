"use client";

import { motion } from "framer-motion";
import TerminalAnimation from "./TerminalAnimation";

const techTags = ["MCP", "Python", "LLM", "RAG", "Agentic Workflows", "Pytest", "Kafka"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-8 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-[var(--fg)]"
            >
              Senior SDET.
              <br />
              <span className="text-[var(--accent)]">Building AI</span>
              <br />
              Systems.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[var(--muted)] leading-relaxed max-w-lg"
            >
              6+ years in distributed systems & backend engineering. Now
              designing LLM agent workflows, MCP tooling, and production AI
              infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white text-sm font-medium rounded-md hover:bg-[var(--accent-dim)] transition-colors"
              >
                View Projects
              </a>
              <a
                href="#writing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--fg)] text-sm font-medium rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                Read Writing
              </a>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-1"
            >
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] rounded"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
