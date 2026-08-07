import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "./ui/CTAButton";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import { useReveal } from "../hooks/useReveal";
import { useScrollY } from "../hooks/useScroll";
import { scrollToId } from "../utils/scrollTo";

function MiniChip({ label, sub, style, delay = 0 }) {
  return (
    <div
      className="absolute rounded-xl px-4 py-3 backdrop-blur-sm"
      style={{
        background: "rgba(16,19,26,0.85)",
        border: "1px solid var(--border-strong)",
        animation: `floatChip 5s ease-in-out ${delay}s infinite`,
        ...style,
      }}
    >
      <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
        {label}
      </div>
      <div className="text-sm font-medium mt-0.5" style={{ color: "var(--text)", fontFamily: "var(--font-mono)" }}>
        {sub}
      </div>
    </div>
  );
}

function HeroMockCard({ scrollY }) {
  const tilt = Math.max(-6, 4 - scrollY * 0.01);
  return (
    <div
      className="relative w-full max-w-md mx-auto"
      style={{
        transform: `perspective(1000px) rotateX(6deg) rotateY(${tilt}deg) translateY(${scrollY * -0.08}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid var(--border-strong)", background: "#080A0E" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
          <span className="ml-3 text-xs" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
            app.compile.studio
          </span>
        </div>
        <div className="p-5 space-y-3">
          <div className="h-3 w-2/3 rounded" style={{ background: "var(--border-strong)" }} />
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[62, 40, 78].map((h, i) => (
              <div key={i} className="rounded" style={{ height: 64, background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                <div className="rounded" style={{ height: `${h}%`, marginTop: `${100 - h}%`, background: "var(--accent)", opacity: 0.85 }} />
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-4">
            <div className="h-2.5 w-full rounded" style={{ background: "var(--border)" }} />
            <div className="h-2.5 w-4/5 rounded" style={{ background: "var(--border)" }} />
            <div className="h-2.5 w-1/2 rounded" style={{ background: "var(--border)" }} />
          </div>
        </div>
      </div>

      <MiniChip label="Build" sub="Passing ✓" style={{ top: "-10%", left: "-14%" }} delay={0} />
      <MiniChip label="AI layer" sub="RAG ready" style={{ bottom: "18%", right: "-16%" }} delay={1.2} />
      <MiniChip label="Deploy" sub="Production" style={{ bottom: "-8%", left: "6%" }} delay={2.4} />
    </div>
  );
}

export default function Hero() {
  const [ref, visible] = useReveal(0.1);
  const scrollY = useScrollY();
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const stats = [
    ["3", "products shipped end to end"],
    ["0", "frameworks hiding the AI — RAG built from primitives"],
    ["<24h", "typical response time, UK/US hours"],
  ];

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(255,180,84,0.18), transparent 65%)",
          filter: "blur(10px)",
          transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0004})`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
          opacity: 0.5,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div
          ref={ref}
          className="lg:col-span-7"
          style={{
            opacity: visible ? heroOpacity : 0,
            transform: visible ? `translateY(${-scrollY * 0.15}px)` : "translateY(24px)",
            transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <Eyebrow>Full-stack studio · MERN &amp; applied AI</Eyebrow>
          <h1
            className="text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl md:leading-[0.95] font-semibold"
            style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}
          >
            We compile ideas
            <br />
            into shipped <span style={{ color: "var(--accent)" }}>software.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            A two-person studio building web apps, AI-powered tools, and internal
            dashboards for founders in the UK and US who need a team that ships
            without the agency overhead.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton onClick={() => scrollToId("contact")}>
              Book a call <ArrowRight size={16} />
            </CTAButton>
            <CTAButton variant="outline" onClick={() => scrollToId("work")}>
              See the work
            </CTAButton>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <HeroMockCard scrollY={scrollY} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--border)" }}>
        {stats.map(([num, label], i) => (
          <Reveal key={num} delay={i * 100}>
            <div style={{ fontFamily: "var(--font-mono)" }}>
              <div className="text-3xl md:text-4xl font-semibold" style={{ color: "var(--accent)" }}>
                {num}
              </div>
              <div className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                {label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
