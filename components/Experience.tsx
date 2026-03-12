"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Iris Software Pvt. Ltd.",
    location: "Gurugram, India",
    client: "Client: National Australia Bank (NAB)",
    role: "Senior SDET",
    period: "Jul 2025 – Present",
    highlights: [
      "MCP agent tooling",
      "Airflow + Kafka validation",
      "Avro contract testing",
      "CI-integrated backend suites",
    ],
    bullets: [
      "Designed and integrated custom MCP-compatible tooling enabling LLM agents to perform multi-step workflows — API execution, database state verification, test case generation from technical documents, and artifact extraction — within an enterprise banking engineering environment.",
      "Used agentic AI for root cause analysis — navigating complex enterprise codebases to surface bug locations and error context for developers, accelerating defect resolution.",
      "Generated test cases autonomously from technical specification documents using LLM-based workflows, reducing manual test design effort significantly.",
      "Built and embedded AI-generated blackbox tests directly in the development repository, enabling shift-left quality detection at commit time.",
      "Validated Airflow DAG pipelines — verified Parquet file ingestion, data transformation logic, and downstream output to Kafka topics and databases.",
      "Built Avro-based contract-testing framework validating microservice integrations and backward compatibility.",
      "Automated Kafka schema and event verification, reducing integration failures across distributed services.",
      "Delivered Java (Gradle) backend automation suites integrated into CI pipelines for early defect detection.",
      "Implemented SQL-driven backend verification to reduce manual validation effort and improve data accuracy.",
      "Optimized pipelines for faster, parallelized automation runs and steadier releases.",
    ],
  },
  {
    company: "Orange Business Services",
    location: "Gurugram, India",
    client: null,
    role: "System Software Engineer",
    period: "Sep 2022 – Jul 2025",
    highlights: [
      "Pytest + Selenium automation",
      "GitLab CI integration",
      "JMeter bottleneck analysis",
      "Mentored junior QA engineers",
    ],
    bullets: [
      "Led Pytest + Selenium automation for API, UI, and backend coverage, integrated with GitLab CI.",
      "Owned microservice test strategy, coverage, quality metrics, and defect lifecycle.",
      "Built REST API and backend validation suites using MongoDB, SQL, and JMeter for performance checks.",
      "Partnered with DevOps to reduce flaky tests, scale pipelines, and stabilize CI/CD.",
      "Created Python utilities for production data parsing and automated Excel reporting.",
      "Mentored junior QA engineers and rolled out API testing best practices and sprint QA metrics.",
      "Executed JMeter-based performance tests, identifying API bottlenecks, thread contention, and throughput issues.",
      "Coordinated nightly validations, UAT cycles, and cross-team release testing with distributed teams.",
    ],
  },
  {
    company: "Comviva Technologies (Tech Mahindra Subsidiary)",
    location: "Gurugram, India",
    client: null,
    role: "Automation Test Engineer",
    period: "Sep 2019 – Sep 2022",
    highlights: [
      "195+ Appium tests",
      "50%+ regression reduction",
      "490+ defects resolved",
      "Oracle SQL validation",
    ],
    bullets: [
      "Automated 195+ Appium mobile test cases, reducing manual regression cycle time by more than 50%.",
      "Built reusable Java + Appium modules for API/mobile automation.",
      "Resolved 490+ defects via collaborative triage across multiple releases.",
      "Performed Oracle SQL backend validations to ensure data integrity.",
      "Managed regression, smoke, and integration suites for financial mobile apps.",
      "Implemented custom scripts and utilities to accelerate test execution and environment readiness.",
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
                      {exp.location && (
                        <p className="font-mono text-xs text-[var(--muted)] mt-0.5">
                          {exp.location}
                        </p>
                      )}
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

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--muted-hi)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

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
