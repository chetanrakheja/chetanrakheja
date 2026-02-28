"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statusItems = [
  { label: "Currently at", value: "Iris Software" },
  { label: "Client", value: "National Australia Bank" },
  { label: "Location", value: "New Delhi, India" },
  {
    label: "Building",
    value: "AICredits.in · MasterPrompting.net",
    links: [
      { text: "AICredits.in", href: "https://aicredits.in" },
      { text: "MasterPrompting.net", href: "https://masterprompting.net" },
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            About
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Building reliability into AI systems.
          </h3>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Text */}
            <div className="lg:col-span-3 space-y-5 text-[var(--muted)] leading-relaxed text-[0.95rem]">
              <p>
                I&apos;m a Senior SDET with 6+ years of experience in distributed
                systems, API engineering, and backend validation — currently at
                Iris Software, working on behalf of National Australia Bank
                (NAB).
              </p>
              <p>
                Over the past year I&apos;ve been going deep into AI engineering —
                designing and integrating custom MCP-compatible tooling that
                gives LLM agents the ability to perform multi-step workflows:
                hitting APIs, verifying database state, generating test cases
                from technical documents, and extracting test artifacts.
              </p>
              <p>
                My QA background gives me something most AI engineers don&apos;t
                naturally have — a systematic instinct for evaluation, edge
                cases, and failure modes. When I look at an LLM-powered system,
                I think about where it breaks, how to measure it, and how to
                make it reliable.
              </p>
            </div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-2"
            >
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 space-y-4">
                {statusItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.links ? (
                      <span className="text-sm text-[var(--fg)]">
                        {item.links.map((link, i) => (
                          <span key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[var(--accent)] transition-colors"
                            >
                              {link.text}
                            </a>
                            {i < item.links!.length - 1 && (
                              <span className="text-[var(--border)] mx-1">·</span>
                            )}
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className="text-sm text-[var(--fg)]">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
