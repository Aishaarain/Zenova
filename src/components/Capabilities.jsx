

import React, { useRef } from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import { usePinnedProgress } from "../hooks/useScroll";

const ITEMS = [
  {
    n: "01",
    title: "Web applications",
    desc: "Most MVPs break the moment you get real customers. Ours don't. We build in proper auth, role-based access, and multi-tenant architecture from the start — so scaling later doesn't mean rebuilding.",
  },
  {
    n: "02",
    title: "AI integrations",
    desc: "RAG pipelines, LLM APIs, and vector search wired directly into your product — not a chatbot bolted on the side.",
  },
  {
    n: "03",
    title: "Internal tools & dashboards",
    desc: "The ops tools that replace your team's spreadsheets — built to fit how you actually work, not a generic template.",
  },
  {
  n: "04",
  title: "SEO & Performance Optimization",
  desc: "Fast, search-optimized web apps — not just pretty ones. We build with clean semantic markup, Core Web Vitals in mind, and proper meta/SSR setup, so your product actually gets found and loads instantly.",
},
];

function CapabilityVisual({ index }) {
  const visuals = [
    <div className="p-6 space-y-4 w-full" key="web">
      <div className="flex gap-2">
        <div className="h-2.5 w-16 rounded" style={{ background: "var(--accent)" }} />
        <div className="h-2.5 w-10 rounded" style={{ background: "var(--border-strong)" }} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[70, 45, 85].map((h, i) => (
          <div key={i} className="rounded flex items-end" style={{ height: 90, background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
            <div className="w-full rounded" style={{ height: `${h}%`, background: "var(--accent)", opacity: 0.8 }} />
          </div>
        ))}
      </div>
      <div className="h-2 w-full rounded" style={{ background: "var(--border)" }} />
      <div className="h-2 w-3/4 rounded" style={{ background: "var(--border)" }} />
    </div>,
    <div className="p-6 w-full flex flex-col items-center justify-center h-full gap-0" key="ai">
      {/* top row: external AI services */}
      <div className="flex gap-3 mb-3">
        {["LLM API", "Vector DB", "Embeddings"].map((label, i) => (
          <span
            key={i}
            className="text-[10px] px-2.5 py-1.5 rounded-lg"
            style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)", fontFamily: "var(--font-mono)", background: "var(--bg-alt)" }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* connecting lines */}
      <svg width="100%" height="36" viewBox="0 0 300 36" style={{ overflow: "visible" }}>
        <line x1="60" y1="0" x2="150" y2="30" stroke="var(--border-strong)" strokeWidth="1.5" />
        <line x1="150" y1="0" x2="150" y2="30" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="240" y1="0" x2="150" y2="30" stroke="var(--border-strong)" strokeWidth="1.5" />
      </svg>

      {/* center: your product */}
      <div
        className="px-5 py-3 rounded-xl text-xs font-semibold mb-3"
        style={{ background: "var(--accent)", color: "#0B0D12", fontFamily: "var(--font-display)" }}
      >
        Your Product
      </div>

      <svg width="100%" height="24" viewBox="0 0 300 24" style={{ overflow: "visible" }}>
        <line x1="150" y1="0" x2="150" y2="24" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>

      {/* bottom: your data sources */}
      <div className="flex gap-2">
        {["docs.pdf", "database", "internal APIs"].map((label, i) => (
          <span
            key={i}
            className="text-[10px] px-2 py-1 rounded-full"
            style={{ border: "1px solid var(--border)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="text-[10px] mt-4 text-center max-w-[220px]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
        AI wired into your existing product — not a separate app
      </p>
    </div>,
    <div className="p-6 w-full" key="tools">
      <div className="grid grid-cols-4 gap-2 text-[10px] mb-2" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
        <span>Client</span>
        <span>Status</span>
        <span>Risk</span>
        <span>Updated</span>
      </div>
      {[
        ["Acme Co", "Active", "Low"],
        ["Fenwick Ltd", "Review", "Med"],
        ["Northgate", "Active", "Low"],
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-4 gap-2 py-2 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <span style={{ color: "var(--text)" }}>{row[0]}</span>
          <span>{row[1]}</span>
          <span style={{ color: "var(--accent)" }}>{row[2]}</span>
          <span>2d ago</span>
        </div>
      ))}
    </div>,
    <div className="p-6 space-y-4 w-full" key="seo">
      <div className="flex items-center justify-between">
        <span className="text-[10px] px-2 py-1 rounded" style={{ background: "var(--bg-alt)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          Lighthouse Report
        </span>
        <span className="text-[10px]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          yoursite.com
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          ["Perf", 98],
          ["SEO", 100],
          ["A11y", 96],
          ["Best", 100],
        ].map(([label, score], i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{
                background: `conic-gradient(var(--accent) ${score}%, var(--border) 0)`,
                color: "var(--text)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#080A0E", fontFamily: "var(--font-mono)", fontSize: "10px" }}
              >
                {score}
              </div>
            </div>
            <span className="text-[10px]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="pt-2 space-y-1.5">
        <div className="h-2 w-full rounded" style={{ background: "var(--border)" }} />
        <div className="h-2 w-4/5 rounded" style={{ background: "var(--border)" }} />
        <div className="flex gap-2 pt-1">
          <span className="text-[10px] px-2 py-1 rounded-full" style={{ border: "1px solid var(--border-strong)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
            LCP 0.8s
          </span>
          <span className="text-[10px] px-2 py-1 rounded-full" style={{ border: "1px solid var(--border-strong)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
            CLS 0.01
          </span>
        </div>
      </div>
    </div>,
  ];
  return visuals[index];
}

export default function Capabilities() {
  const outerRef = useRef(null);
  const { active } = usePinnedProgress(outerRef, ITEMS.length);

  return (
    <section id="capabilities" className="px-6 md:px-10 pt-20">
      <div className="max-w-7xl mx-auto mb-4">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            How we work with you
          </h2>
        </Reveal>
      </div>

      {/* pinned outer wrapper — height gives room to scroll through each state */}
      <div ref={outerRef} style={{ height: `${ITEMS.length * 70}vh` }} className="relative max-w-7xl mx-auto mt-10">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              {ITEMS.map((it, i) => (
                <div
                  key={it.n}
                  className="py-6 md:py-8 border-l-2 pl-6 mb-2"
                  style={{
                    borderColor: active === i ? "var(--accent)" : "var(--border)",
                    opacity: active === i ? 1 : 0.4,
                    transform: active === i ? "translateX(0px)" : "translateX(-4px)",
                    transition: "opacity 0.4s ease, border-color 0.4s ease, transform 0.4s ease",
                  }}
                >
                  <div className="text-sm mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{it.n}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                    {it.title}
                  </h3>
                  {active === i && (
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
                      {it.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative h-[380px] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border-strong)", background: "#080A0E" }}>
              {ITEMS.map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: active === i ? 1 : 0, transition: "opacity 0.5s ease" }}
                >
                  <CapabilityVisual index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}