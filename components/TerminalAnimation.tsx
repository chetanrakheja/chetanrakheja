"use client";

import { useState, useEffect } from "react";

const lines = [
  { prefix: "> ", text: 'agent.run("verify payment API")', color: "var(--accent)" },
  { prefix: "✓ ", text: "hitting POST /api/payments...", color: "var(--green)" },
  { prefix: "✓ ", text: "querying db: SELECT * FROM transactions...", color: "var(--green)" },
  { prefix: "✓ ", text: "assertion passed: status=200, db_record=found", color: "var(--green)" },
  { prefix: "✓ ", text: "artifact saved: test_report_2024.json", color: "var(--green)" },
];

const CHAR_SPEED = 28; // ms per character
const LINE_PAUSE = 300; // ms between lines
const RESTART_PAUSE = 2400; // ms before restarting

export default function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<{ prefix: string; text: string; color: string; partial: string; done: boolean }[]>([]);
  const [phase, setPhase] = useState<"typing" | "pausing">("typing");

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const reset = () => {
      setDisplayedLines([]);
      setPhase("typing");
      runTyping();
    };

    const runTyping = async () => {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const line = lines[i];
        // Add empty line entry
        setDisplayedLines((prev) => [
          ...prev,
          { ...line, partial: "", done: false },
        ]);
        // Type characters
        for (let c = 0; c <= line.text.length; c++) {
          if (cancelled) return;
          await new Promise((res) => { timeoutId = setTimeout(res, CHAR_SPEED); });
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], partial: line.text.slice(0, c) };
            if (c === line.text.length) next[i].done = true;
            return next;
          });
        }
        // Pause between lines
        if (i < lines.length - 1) {
          await new Promise((res) => { timeoutId = setTimeout(res, LINE_PAUSE); });
        }
      }
      // Pause at end then restart
      setPhase("pausing");
      await new Promise((res) => { timeoutId = setTimeout(res, RESTART_PAUSE); });
      if (!cancelled) reset();
    };

    runTyping();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-deep)] overflow-hidden font-mono text-sm shadow-lg shadow-black/40">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[var(--muted)]">agent_workflow.py</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 min-h-[140px] space-y-1.5">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span style={{ color: line.color }} className="shrink-0 select-none">
              {line.prefix}
            </span>
            <span className="text-[var(--fg-dim)]">
              {line.partial}
              {!line.done && phase === "typing" && (
                <span className="cursor-blink text-[var(--accent)]">▊</span>
              )}
            </span>
          </div>
        ))}
        {displayedLines.length === 0 && (
          <div className="flex">
            <span className="text-[var(--accent)]">&gt;&nbsp;</span>
            <span className="cursor-blink text-[var(--accent)]">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
