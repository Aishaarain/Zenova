import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Edit this array — the second entry is a placeholder for your co-founder.
const FOUNDERS = [
  {
    name: "Anamta Batool",
    title: "Founder",
    role: "Complementary skillset",
    desc: "Add your partner's focus here — design, growth, backend, or whatever rounds out the studio. This block is a placeholder to fill in.",
  },
  {
    name: "Aisha Arain",
    title: "CO-Founder",
    role: "Full-stack & AI integration",
    desc: "Owns the Full stack end to end — architecture, auth, deployment — And Integrate the AI Features",
  },
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
}

export default function About() {
  return (
    <section id="team" className="px-6 md:px-10 py-28 md:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            Two people, one studio
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FOUNDERS.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 120}
              className="p-8 md:p-10 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <div
  className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-sm font-semibold"
  style={{ background: "var(--accent)", color: "#0B0D12", fontFamily: "var(--font-mono)" }}
>
  {getInitials(f.name)}
</div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                {f.name}
              </h3>
              <div className="text-xs uppercase tracking-[0.1em] mt-1 mb-2" style={{ color: "var(--text-faint)" }}>
                {f.title}
              </div>
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