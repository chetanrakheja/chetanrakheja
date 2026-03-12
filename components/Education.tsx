"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const educationItems = [
  {
    degree: "MCA",
    institute: "IGNOU",
    period: "2019–2023",
    score: "66.32%",
  },
  {
    degree: "BCA",
    institute: "JIMS, New Delhi",
    period: "2016–2019",
    score: "85%",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Education
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--fg)] mb-12">
            Academic foundation.
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {educationItems.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-[var(--fg)]">{item.degree}</h4>
                  <span className="font-mono text-xs text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1 rounded shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] mb-4">{item.institute}</p>
                <span className="inline-flex items-center font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--muted-hi)]">
                  Score: {item.score}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
