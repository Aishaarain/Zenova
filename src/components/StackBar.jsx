import React from "react";

const STACK = ["React", "Node.js", "Express", "MongoDB", "Tailwind", "OpenAI / Groq", "Supabase", "Vercel"];

export default function StackBar() {
  return (
    <section className="px-6 md:px-10 py-10" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          The stack we build with
        </span>
        <div className="flex flex-wrap gap-3">
          {STACK.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
