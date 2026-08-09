import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Edit these — swap in your real numbers/points once you have them.
const STATS = [
  { value: "10+", label: "Products shipped" },
  { value: "100%", label: "Direct access — no account managers" },
];

const PRINCIPLES = [
  {
    title: "We ship, not stall",
    desc: "No layers of approvals or handoffs between departments. Decisions get made and code gets written the same day.",
  },
  {
    title: "Senior work, every time",
    desc: "Every product that leaves our studio is built and reviewed by senior engineers — not junior devs learning on your budget.",
  },
  {
    title: "Built to make money",
    desc: "We measure our work by whether it moves your business forward — signups, retention, revenue — not just whether it ships.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            A studio built to ship
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
            We're a lean dev studio focused on one thing: building products that make startups money. No account managers, no departments to hand off between — just senior engineers writing code that ships.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 pb-14 border-b" style={{ borderColor: "var(--border)" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-3xl md:text-5xl font-semibold mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>
                {s.value}
              </div>
              <div className="text-xs md:text-sm" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="p-8 md:p-10" style={{ background: "var(--bg-alt)" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}