"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { label: "GenAI with Python", issuer: "ChaiCode" },
  { label: "Prompt Design in Vertex AI", issuer: "Google Cloud" },
  { label: "Gemini & Imagen Apps", issuer: "Google" },
  { label: "ISTQB Foundation", issuer: "ISTQB" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
            Certifications
          </h2>

          <div className="flex flex-wrap gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                <div>
                  <p className="text-sm text-[var(--fg-dim)] font-medium leading-tight">
                    {cert.label}
                  </p>
                  <p className="font-mono text-[10px] text-[var(--muted)] mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
