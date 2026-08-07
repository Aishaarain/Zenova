import React from "react";
import { Check } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Adjust these to your real rates.
const TIERS = [
  { name: "MVP build", price: "from $1,500", desc: "A focused web app or AI feature, scoped and shipped in a single sprint.", items: ["1–2 core features", "Auth & database included", "2 weeks average turnaround"] },
  { name: "Full product", price: "from $4,000", desc: "A complete MERN product with AI integration, built over several sprints.", items: ["Multi-feature build", "AI/RAG integration", "Weekly demos"], highlighted: true },
  { name: "Retainer", price: "from $800/mo", desc: "Ongoing support and iteration once your product is live.", items: ["Priority response time", "Bug fixes & small features", "Monthly check-in call"] },
];

export default function Pricing() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
              Rough starting points
            </h2>
          </div>
          <p className="max-w-sm text-sm" style={{ color: "var(--text-muted)" }}>
            Every project is scoped on a call. These ranges are placeholders — adjust them to match your real rates.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="p-8 rounded-xl flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{ background: t.highlighted ? "var(--accent)" : "var(--bg)", border: t.highlighted ? "none" : "1px solid var(--border-strong)" }}
            >
              <h3 className="text-lg font-semibold mb-1" style={{ color: t.highlighted ? "#0B0D12" : "var(--text)", fontFamily: "var(--font-display)" }}>
                {t.name}
              </h3>
              <div className="text-2xl font-semibold mb-4" style={{ color: t.highlighted ? "#0B0D12" : "var(--accent)", fontFamily: "var(--font-mono)" }}>
                {t.price}
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: t.highlighted ? "rgba(11,13,18,0.75)" : "var(--text-muted)" }}>
                {t.desc}
              </p>
              <ul className="space-y-2.5 mt-auto">
                {t.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm" style={{ color: t.highlighted ? "#0B0D12" : "var(--text-muted)" }}>
                    <Check size={14} className="mt-0.5 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
