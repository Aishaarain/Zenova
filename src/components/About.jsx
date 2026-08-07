import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Edit this array — the second entry is a placeholder for your co-founder.
const FOUNDERS = [
  {
    name: "Aisha",
    role: "Full-stack & AI integration",
    desc: "Owns the MERN stack end to end — architecture, auth, deployment — and builds the AI layer from primitives: RAG pipelines, LLM APIs, vector search.",
  },
  {
    name: "Co-founder",
    role: "Complementary skillset",
    desc: "Add your partner's focus here — design, growth, backend, or whatever rounds out the studio. This block is a placeholder to fill in.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            Two people, one studio
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
            No account managers, no handoffs between departments. You work directly with the two people writing the code.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 120} className="p-8 md:p-10" style={{ background: "var(--bg-alt)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-sm font-semibold" style={{ background: "var(--accent)", color: "#0B0D12", fontFamily: "var(--font-mono)" }}>
                {f.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                {f.name}
              </h3>
              <div className="text-sm mb-4" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                {f.role}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {f.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
