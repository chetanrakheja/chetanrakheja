"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Credential = {
  label: string;
  type: "Certification" | "Achievement";
  issuer?: string;
  date?: string;
  detail?: string;
};

const credentials: Credential[] = [
  {
    label: "GenAI with Python",
    issuer: "ChaiCode",
    date: "Nov 2025",
    type: "Certification",
  },
  {
    label: "Build Real World AI Apps with Gemini and Imagen",
    issuer: "Google",
    date: "Apr 2025",
    type: "Certification",
  },
  {
    label: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    type: "Certification",
  },
  {
    label: "ISTQB Foundation Certified",
    issuer: "ISTQB",
    detail: "Certificate No. 0098582, July 2019",
    type: "Certification",
  },
  {
    label: "Best Newcomer Award",
    issuer: "Orange Business Services",
    date: "Apr 2023",
    type: "Achievement",
  },
  {
    label: "Top Team Award",
    issuer: "Comviva",
    date: "Jul 2022",
    type: "Achievement",
  },
  {
    label: "Mentored 4+ junior engineers",
    detail: "Selected for overseas UAT & production testing",
    type: "Achievement",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Credentials
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Certifications & Achievements.
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((credential, i) => (
              <motion.div
                key={credential.label}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wide">
                    {credential.type}
                  </span>
                  {credential.date && (
                    <span className="font-mono text-[10px] text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-2 py-0.5 rounded">
                      {credential.date}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-[var(--fg)] font-medium leading-snug">
                    {credential.label}
                  </p>
                  {credential.issuer && (
                    <p className="font-mono text-[10px] text-[var(--muted)] mt-1">
                      {credential.issuer}
                    </p>
                  )}
                  {credential.detail && (
                    <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">
                      {credential.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
