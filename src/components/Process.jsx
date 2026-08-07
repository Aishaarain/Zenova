import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { usePinnedProgress } from "../hooks/useScroll";
import { scrollToId } from "../utils/scrollTo";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    desc: "A call to scope the real problem, pick the right stack, and set a realistic timeline — before any code gets written.",
    terminal: ["$ discovery --scope", "> mapping requirements...", "> stack: MERN + AI", "> estimate ready ✓"],
  },
  {
    n: "02",
    title: "Build",
    desc: "Weekly demos and async updates so you always know what shipped, even across UK/US time zones.",
    terminal: ["$ npm run dev", "> compiling modules...", "> tests passing (24/24) ✓", "> deploy preview ready"],
  },
  {
    n: "03",
    title: "Launch",
    desc: "We deploy, run through the final checks together, and hand over documentation so your team isn't locked out.",
    terminal: ["$ vercel --prod", "> building...", "> deployed to production", "> live ✓"],
  },
  {
    n: "04",
    title: "Support",
    desc: "Post-launch fixes and iteration, with an optional retainer if you want us on call as you keep building.",
    terminal: ["$ tail -f logs", "> watching for errors...", "> 0 incidents this week", "> monitoring ✓"],
  },
];

export default function Process() {
  const outerRef = useRef(null);
  const { active, progress } = usePinnedProgress(outerRef, STEPS.length);

  return (
    <section id="process" className="px-6 md:px-10 pt-20">
      <div className="max-w-7xl mx-auto mb-4">
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            From first call to shipped product
          </h2>
        </Reveal>
      </div>

      <div ref={outerRef} style={{ height: `${STEPS.length * 70}vh` }} className="relative max-w-7xl mx-auto mt-10">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* step rail */}
            <div className="hidden md:flex md:col-span-1 flex-col items-center h-64 justify-between relative">
              <div className="absolute top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />
              <div className="absolute top-0 w-px" style={{ height: `${progress * 100}%`, background: "var(--accent)", transition: "height 0.1s linear" }} />
              {STEPS.map((s, i) => (
                <span
                  key={s.n}
                  className="relative z-10 w-3 h-3 rounded-full"
                  style={{
                    background: active >= i ? "var(--accent)" : "var(--bg)",
                    border: `2px solid ${active >= i ? "var(--accent)" : "var(--border-strong)"}`,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <div className="md:col-span-5">
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: active === i ? "block" : "none" }}>
                  <div className="text-sm mb-4" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                    {s.n} / {String(STEPS.length).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:col-span-6">
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-strong)", background: "#080A0E" }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                  <span className="ml-3 text-xs" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                    studio@compile — step {STEPS[active].n}
                  </span>
                </div>
                <div className="p-6 min-h-[220px]" style={{ fontFamily: "var(--font-mono)" }}>
                  {STEPS[active].terminal.map((line, i) => (
                    <div
                      key={`${active}-${i}`}
                      className="text-sm mb-2"
                      style={{ color: line.startsWith("$") ? "var(--accent)" : "var(--text-muted)", opacity: 0, animation: `fadeInLine 0.4s ease forwards ${i * 0.15}s` }}
                    >
                      {line}
                    </div>
                  ))}
                  <span className="inline-block w-2 h-4 align-middle" style={{ background: "var(--accent)", animation: "blink 1s step-end infinite" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Reveal className="py-16">
          <CTAButton onClick={() => scrollToId("contact")}>
            Start with discovery <ArrowRight size={16} />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
