"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "AI & LLM",
    skills: [
      "Prompt Engineering",
      "MCP",
      "Agentic Workflows",
      "RAG Pipelines",
      "LLM Integration",
      "OpenAI",
      "Anthropic Claude",
    ],
  },
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Testing & Automation",
    skills: ["Pytest", "Selenium", "Appium", "JMeter", "Postman", "Contract Testing (Avro)"],
  },
  {
    label: "Data & Pipelines",
    skills: ["Apache Airflow", "Kafka", "Parquet", "Striim"],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "CI/CD", "GitLab CI", "Jenkins", "OpenShift", "AWS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle SQL"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Skills
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Tools of the trade.
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <h4 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--muted-hi)] rounded-md hover:border-[var(--accent)]/40 hover:text-[var(--fg)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
