"use client";

import React, { useRef } from "react";
import { ArrowRight, Clock, Shield, Zap, TrendingUp } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

const STEPS = [
  {
    n: "01",
    title: "Discovery & Planning",
    desc: "We start with a free strategy call to understand your business goals, target users, and revenue model. Then we create a clear roadmap with fixed pricing and delivery dates — no surprises.",
    points: ["Free 30-min strategy call", "Fixed price & timeline", "Clear roadmap document"],
    icon: Clock,
  },
  {
    n: "02",
    title: "Design & Build",
    desc: "Our senior developers write clean, scalable code with weekly demos. You see real progress every week, not just promises. React, Next.js, Python — whatever your product needs.",
    points: ["Weekly live demos", "Clean, scalable code", "You own all source code"],
    icon: Zap,
  },
  {
    n: "03",
    title: "Launch & Deploy",
    desc: "We deploy your product to AWS or Vercel, connect your domain, and run full testing. Your app goes live with monitoring, SSL, and everything production-ready from day one.",
    points: ["Production-ready deploy", "SSL + monitoring setup", "Custom domain connected"],
    icon: Shield,
  },
  {
    n: "04",
    title: "Support & Scale",
    desc: "We don't disappear after launch. Get 30 days of free bug fixes plus optional monthly support. We help you add features, optimize speed, and scale as your user base grows.",
    points: ["30 days free support", "Optional monthly retainer", "Help growing your product"],
    icon: TrendingUp,
  },
];

function usePinnedProgress(ref, totalSteps) {
  const [active, setActive] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const sectionHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const totalScroll = sectionHeight - viewportHeight;

      if (scrolled < 0) {
        setActive(0);
        setProgress(0);
      } else if (scrolled > totalScroll) {
        setActive(totalSteps - 1);
        setProgress(1);
      } else {
        const rawProgress = scrolled / totalScroll;
        setProgress(rawProgress);
        setActive(Math.min(Math.floor(rawProgress * totalSteps), totalSteps - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, totalSteps]);

  return { active, progress };
}

export default function Process() {
  const outerRef = useRef(null);
  const { active, progress } = usePinnedProgress(outerRef, STEPS.length);

  const ActiveIcon = STEPS[active].icon;

  return (
    <section
      id="process"
      aria-label="Zenova software development process"
      className="relative"
      style={{ background: "#0c0c18" }}
    >
      {/* Unique glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${Y[500]}0A, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      {/* ═══ CENTER HEADER — UPER KARA ═══ */}
      <div className="relative px-6 md:px-10 pt-10 pb-2 text-center">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{
              background: `${Y[400]}08`,
              border: `1px solid ${Y[400]}15`,
              color: Y[400],
            }}
          >
            Our Process
          </div>

          <h2
            className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em] max-w-2xl mx-auto"
            style={{ color: "#fff" }}
          >
            From First Call to{" "}
            <span style={{ color: Y[400] }}>Live Product</span>
          </h2>

          <p
            className="mt-3 text-[15px] leading-[1.7] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Our 4-step process is built for speed. No endless meetings, no hidden costs — just a clear path from your idea to a working product.
          </p>
        </div>
      </div>

      {/* ═══ PINNED STEPS — UPER SE START ═══ */}
      <div
        ref={outerRef}
        style={{ height: `${STEPS.length * 65}vh` }}
        className="relative px-6 md:px-10"
      >
        <div
          className="sticky top-0 h-screen flex items-center"
          style={{ background: "#0c0c18" }}
        >
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            
            {/* Left: Step Rail */}
            <div className="hidden md:flex md:col-span-1 flex-col items-center h-64 justify-between relative">
              <div
                className="absolute top-0 bottom-0 w-[2px]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
              <div
                className="absolute top-0 w-[2px] transition-all duration-100"
                style={{
                  height: `${progress * 100}%`,
                  background: `linear-gradient(180deg, ${Y[400]}, ${Y[500]})`,
                  boxShadow: `0 0 20px ${Y[400]}30`,
                }}
              />
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-[11px] font-black transition-all duration-300"
                  style={{
                    background: active >= i ? `${Y[400]}15` : "rgba(255,255,255,0.03)",
                    border:
                      active >= i
                        ? `2px solid ${Y[400]}`
                        : "2px solid rgba(255,255,255,0.1)",
                    color: active >= i ? Y[400] : "rgba(255,255,255,0.3)",
                    boxShadow:
                      active >= i ? `0 0 20px ${Y[400]}20` : "none",
                  }}
                >
                  {s.n}
                </div>
              ))}
            </div>

            {/* Middle: Step Content */}
            <div className="md:col-span-5 relative">
              {/* Big background number */}
              <div
                className="absolute -top-4 -left-2 text-[90px] md:text-[120px] font-black leading-none select-none pointer-events-none transition-all duration-500"
                style={{
                  color: "transparent",
                  WebkitTextStroke: `1.5px ${Y[400]}12`,
                  opacity: 0.5,
                }}
              >
                {STEPS[active].n}
              </div>

              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className="transition-all duration-500 relative z-10"
                  style={{
                    display: active === i ? "block" : "none",
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        background: `${Y[400]}10`,
                        border: `1px solid ${Y[400]}18`,
                        color: Y[400],
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: Y[400] }}
                      />
                      Step {s.n} of 04
                    </div>
                  </div>

                  <h3
                    className="text-xl md:text-[26px] font-black tracking-[-0.02em] mb-2"
                    style={{ color: "#fff" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-[14px] md:text-[15px] leading-[1.7]"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}

              {/* Mobile dots */}
              <div className="flex md:hidden items-center gap-2 mt-5">
                {STEPS.map((s, i) => (
                  <div
                    key={s.n}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? "36px" : "10px",
                      background: active >= i ? Y[400] : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: Visual Card */}
            <div className="md:col-span-6">
              <div
                className="relative rounded-2xl p-5 md:p-7 transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${active % 2 === 0 ? `${Y[400]}18` : `${Y[400]}10`}`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${Y[400]}04`,
                }}
              >
                {/* Top icon + step name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: `${Y[400]}10`,
                      border: `1px solid ${Y[400]}20`,
                    }}
                  >
                    <ActiveIcon size={20} style={{ color: Y[400] }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      What happens in this step
                    </div>
                    <div
                      className="text-[15px] font-black"
                      style={{ color: "#fff" }}
                    >
                      {STEPS[active].title}
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5">
                  {STEPS.map((s, stepIndex) => (
                    <div
                      key={s.n}
                      className="space-y-2.5 transition-all duration-300"
                      style={{
                        display: active === stepIndex ? "block" : "none",
                        opacity: active === stepIndex ? 1 : 0,
                      }}
                    >
                      {s.points.map((point, i) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.04)",
                            animation:
                              active === stepIndex
                                ? `slideIn 0.4s ease forwards ${i * 0.12}s`
                                : "none",
                            opacity: 0,
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: `${Y[400]}12`,
                              border: `1px solid ${Y[400]}25`,
                            }}
                          >
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke={Y[400]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span
                            className="text-[13px] font-semibold"
                            style={{ color: "rgba(255,255,255,0.75)" }}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Bottom mini progress */}
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
                      Overall Progress
                    </span>
                    <span className="text-[10px] font-black" style={{ color: Y[400] }}>
                      {Math.round(progress * 100)}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${progress * 100}%`,
                        background: `linear-gradient(90deg, ${Y[400]}, ${Y[500]})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM CTA — UPER KARA ═══ */}
      <div className="relative px-6 md:px-10 pt-4 pb-10">
        <div
          className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl p-6 md:p-8"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-black" style={{ color: "#fff" }}>
              Ready to start your project?
            </h3>
            <p className="mt-1 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Book a free 30-minute discovery call. No commitment required.
            </p>
          </div>
          <button
            onClick={() => scrollToId("start")}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-[13px] font-black transition-all duration-300 shrink-0"
            style={{
              background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
              color: "#0a0a0f",
              boxShadow: `0 4px 20px ${Y[400]}20`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${Y[400]}35`;
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 20px ${Y[400]}20`;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Start Your Project
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}