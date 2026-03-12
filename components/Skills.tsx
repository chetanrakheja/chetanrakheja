"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "AI & LLM",
    skills: [
      "Prompt Engineering",
      "LLM Integration",
      "MCP (Model Context Protocol)",
      "Agentic Workflows",
      "RAG Pipelines",
      "OpenAI",
      "Anthropic Claude",
      "Amazon Q",
      "Cursor",
    ],
  },
  {
    label: "Languages & Frameworks",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Pytest", "Selenium", "Appium"],
  },
  {
    label: "Automation & Tools",
    skills: ["Postman", "JMeter", "Git", "GitLab CI", "Jenkins", "Docker", "Bash", "Maven", "Swagger"],
  },
  {
    label: "Testing Areas",
    skills: [
      "API Testing",
      "Web Testing",
      "Mobile App Testing",
      "Backend Validation",
      "Data-driven Testing",
      "Performance Testing (JMeter)",
      "Contract Testing (Avro)",
    ],
  },
  {
    label: "Data & Pipelines",
    skills: ["Apache Airflow (DAG execution)", "Parquet file processing", "Kafka", "Striim"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "Oracle SQL", "MongoDB", "MySQL"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS (basic)", "CI/CD Pipelines", "OpenShift (oc/kubectl)", "KaaS", "Docker"],
  },
  {
    label: "Monitoring & Messaging",
    skills: ["Kafka", "Prometheus", "Grafana", "Kibana"],
  },
  {
    label: "Project & Documentation Tools",
    skills: ["Jira", "Confluence"],
  },
  {
    label: "Platforms & Methodologies",
    skills: ["Linux", "Agile", "Scrum", "ISTQB Foundation"],
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
