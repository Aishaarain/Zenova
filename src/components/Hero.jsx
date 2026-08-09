import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react";
import CTAButton from "./ui/CTAButton";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import { useReveal } from "../hooks/useReveal";
import { useScrollY } from "../hooks/useScroll";
import { scrollToId } from "../utils/scrollTo";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

function FloatBadge({ icon: Icon, label, value, position, delay = 0 }) {
  return (
    <div
      className="absolute z-10 rounded-2xl px-4 py-3 backdrop-blur-md"
      style={{
        ...position,
        background: "rgba(10,10,15,0.85)",
        border: `1px solid ${Y[400]}18`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${Y[400]}08`,
        animation: `heroFloat 6s ease-in-out ${delay}s infinite`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{
            background: `${Y[400]}12`,
            border: `1px solid ${Y[400]}20`,
          }}
        >
          <Icon size={14} style={{ color: Y[400] }} />
        </div>
        <div>
          <div
            className="text-[10px] uppercase tracking-widest font-bold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {label}
          </div>
          <div
            className="text-[13px] font-bold mt-0.5"
            style={{ color: Y[400] }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [ref, visible] = useReveal(0.1);
  const scrollY = useScrollY();
  const heroOpacity = Math.max(0, 1 - scrollY / 700);

  const stats = [
    { num: "20+", label: "Products shipped", icon: Zap },
    { num: "12+", label: "AI agents in production", icon: Sparkles },
    { num: "4-6", label: "Weeks to launch", icon: ShieldCheck },
  ];

  const trusts = [
    "React & Next.js",
    "Node & Python",
    "AI & LLM integrated",
    "AWS & Vercel",
  ];

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
    >
      {/* ─── BG Gradient Orbs ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-8%] w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${Y[400]}10, transparent 60%)`,
          filter: "blur(40px)",
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0003})`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${Y[500]}08, transparent 60%)`,
          filter: "blur(30px)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* ─── Grid Overlay ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 70%)",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* ═══════════ MAIN GRID ═══════════ */}
      <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ─── LEFT: Text ─── */}
        <div
          ref={ref}
          className="lg:col-span-6 xl:col-span-6"
          style={{
            opacity: visible ? heroOpacity : 0,
            transform: visible
              ? `translateY(${-scrollY * 0.12}px)`
              : "translateY(30px)",
            transition:
              "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <Eyebrow>Full-stack dev studio · MERN & Applied AI</Eyebrow>

          <h1
            className="mt-4 text-[clamp(2.8rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
           From Idea To
            <br />
            <span style={{ color: Y[400] }}>live product. Fast.</span>
          </h1>

          <p
            className="mt-7 max-w-lg text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A tight dev studio. We ship MVPs, SaaS dashboards, and AI-powered
            tools — fast. No fluff, no agency bloat. Just working products
            that generate revenue.
          </p>

          {/* ─── CTAs ─── */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("start")}
              className="relative group overflow-hidden rounded-xl px-7 py-3.5 text-[15px] font-black tracking-[-0.01em] transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                color: "#0a0a0f",
                boxShadow: `0 4px 20px ${Y[400]}25`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 35px ${Y[400]}40, 0 8px 30px ${Y[400]}20`;
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px ${Y[400]}25`;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "heroShimmer 2s ease-in-out infinite",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </span>
            </button>

            <button
              onClick={() => scrollToId("shipped")}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-bold transition-all duration-300"
              style={{
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = Y[400];
                e.currentTarget.style.borderColor = `${Y[400]}30`;
                e.currentTarget.style.background = `${Y[400]}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              See Our Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* ─── Trust Signals ─── */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trusts.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-[13px] font-semibold"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: Y[400] }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Image ─── */}
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div
            className="relative"
            style={{
              transform: `perspective(1200px) rotateY(-4deg) rotateX(2deg) translateY(${scrollY * -0.06}px)`,
              transition: "transform 0.15s linear",
            }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glow behind */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                style={{ background: Y[400] }}
              />

              <img
                src="https://images.unsplash.com/photo-1555069932-869ad7c3f54?w=800&q=80"
                alt="Zenova — Shipping products that make startups money"
                className="relative w-full h-auto rounded-3xl object-cover aspect-[4/3]"
                style={{
                  border: `1px solid ${Y[400]}15`,
                  boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 60px ${Y[400]}08`,
                }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.7) 100%), linear-gradient(135deg, rgba(10,10,15,0.4) 0%, transparent 50%)",
                }}
              />

              {/* Scan line effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
                }}
              />

              {/* Center overlay text on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ background: Y[400], boxShadow: `0 0 12px ${Y[400]}` }}
                  />
                  <span
                    className="text-[13px] font-bold tracking-wide"
                    style={{ color: Y[400] }}
                  >
                    zenova.dev — Live
                  </span>
                </div>
              </div>
            </div>

            {/* ─── Floating Badges ─── */}
            <FloatBadge
              icon={Zap}
              label="Status"
              value="Build Passing"
              position={{ top: "-6%", left: "-8%" }}
              delay={0}
            />
            <FloatBadge
              icon={Sparkles}
              label="AI Layer"
              value="RAG Ready"
              position={{ top: "30%", right: "-10%" }}
              delay={1.5}
            />
            <FloatBadge
              icon={ShieldCheck}
              label="Deploy"
              value="Production"
              position={{ bottom: "8%", left: "-6%" }}
              delay={3}
            />
            <FloatBadge
              icon={Globe}
              label="Uptime"
              value="99.9%"
              position={{ bottom: "-4%", right: "8%" }}
              delay={2}
            />
          </div>
        </div>
      </div>

      {/* ═══════════ STATS BAR ═══════════ */}
      <div className="relative max-w-[1400px] mx-auto w-full mt-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${Y[400]}08`,
            boxShadow: `0 0 40px ${Y[400]}04`,
          }}
        >
          {stats.map(({ num, label, icon: Icon }, i) => (
            <Reveal key={num} delay={i * 120}>
              <div
                className="flex items-center gap-5 px-8 py-7"
                style={{
                  borderRight:
                    i < 2
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${Y[400]}08`,
                    border: `1px solid ${Y[400]}12`,
                  }}
                >
                  <Icon size={20} style={{ color: Y[400] }} />
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-black tracking-[-0.03em] leading-none"
                    style={{ color: Y[400] }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[13px] font-semibold mt-1.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ─── Keyframes ─── */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes heroShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}