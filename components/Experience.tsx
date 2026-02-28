"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Iris Software",
    client: "Client: National Australia Bank",
    role: "Senior SDET",
    period: "Jul 2025 – Present",
    bullets: [
      "Designed custom MCP-compatible tooling for LLM agent multi-step workflows",
      "Agentic AI for root cause analysis across enterprise banking codebase",
      "Validated Airflow DAG pipelines for Parquet → Kafka/DB data flows",
    ],
  },
  {
    company: "Orange Business Services",
    client: null,
    role: "System Software Engineer",
    period: "Sep 2022 – Jul 2025",
    bullets: [
      "Led Pytest + Selenium automation integrated with GitLab CI",
      "Built REST API and backend validation suites across microservices",
      "JMeter performance testing — identified API bottlenecks and throughput issues",
    ],
  },
  {
    company: "Comviva (Tech Mahindra)",
    client: null,
    role: "Automation Test Engineer",
    period: "Sep 2019 – Sep 2022",
    bullets: [
      "Automated 195+ Appium mobile test cases, reducing regression time by 50%+",
      "Built reusable Java + Appium modules for API/mobile automation",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Experience
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Where I&apos;ve worked.
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <span className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]" />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-semibold text-[var(--fg)]">
                        {exp.company}
                      </h4>
                      {exp.client && (
                        <p className="font-mono text-xs text-[var(--accent)] mt-0.5">
                          {exp.client}
                        </p>
                      )}
                      <p className="text-sm text-[var(--muted)] mt-0.5">{exp.role}</p>
                    </div>
                    <span className="font-mono text-xs text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2.5 py-1 rounded shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[var(--muted)] leading-relaxed"
                      >
                        <span className="text-[var(--accent)] mt-1 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
