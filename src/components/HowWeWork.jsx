"use client";

import React from "react";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import processImg from "../assets/Process.webp";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    desc: "We jump on a 30-min call to understand your product, market, and revenue goals. No forms. No fluff.",
    duration: "Day 1",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Scope",
    desc: "You get wireframes and a fixed scope within 48 hours. One price. One timeline. Zero surprises.",
    duration: "Days 2-3",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build & Ship",
    desc: "We code in weekly sprints with live demos. React, Next.js, Node — whatever your product needs.",
    duration: "Weeks 2-5",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Scale",
    desc: "We deploy to AWS/Vercel, connect your domain, and hand over clean code. Ready to scale.",
    duration: "Week 6",
  },
  {
    num: "05",
    icon: Headphones,
    title: "30-Day Support",
    desc: "Free bug fixes and tweaks for 30 days post-launch. We don't disappear after delivery.",
    duration: "Ongoing",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      aria-label="How Zenova works"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #05050a 0%, #0a0a14 50%, #070710 100%)",
      }}
    >
      {/* ─── Subtle Mesh Gradient ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(at 40% 20%, ${Y[500]}08 0px, transparent 50%),
                             radial-gradient(at 80% 0%, ${Y[400]}05 0px, transparent 50%),
                             radial-gradient(at 0% 50%, ${Y[500]}06 0px, transparent 50%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto w-full">
        {/* ═══ HEADER ═══ */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
            style={{
              background: `${Y[400]}08`,
              border: `1px solid ${Y[400]}15`,
              color: Y[400],
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: Y[400] }} />
            Our Process
          </div>

          <h2
            className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            From Idea to Live Product in{" "}
            <span style={{ color: Y[400] }}>4–6 Weeks</span>
          </h2>

          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            No 50-page proposals. No 3-month delays. Our process is built for 
            founders who want to move fast and ship faster.
          </p>
        </header>

        {/* ═══ CONTENT GRID ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* ─── LEFT: Process Image ─── */}
          <aside className="relative">
            <div className="relative">
              {/* Frame border effect */}
              <div
                className="absolute -inset-[1px] rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]}20, transparent, ${Y[500]}10)`,
                  padding: "1px",
                }}
              >
                <div className="w-full h-full rounded-2xl" style={{ background: "#0a0a12" }} />
              </div>

              <figure className="relative rounded-2xl overflow-hidden m-0">
                <img
                  src={processImg}
                  alt="Zenova agile development process showing design sprints, coding, and product launch workflow"
                  className="relative w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  width="700"
                  height="525"
                  loading="lazy"
                  style={{
                    border: `1px solid ${Y[400]}08`,
                  }}
                />

                {/* Bottom fade */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(5,5,10,0.9) 100%)",
                  }}
                  aria-hidden="true"
                />
              </figure>

              {/* Floating tag */}
              <div
                className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between px-5 py-3.5 rounded-xl"
                style={{
                  background: "rgba(10,10,18,0.9)",
                  border: `1px solid ${Y[400]}15`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-[13px] font-bold" style={{ color: "#fff" }}>
                  Fixed Price Guarantee
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md" style={{ background: `${Y[400]}15`, color: Y[400] }}>
                  No Hidden Costs
                </span>
              </div>
            </div>
          </aside>

          {/* ─── RIGHT: Steps Cards ─── */}
          <div className="space-y-4">
            {steps.map(({ num, icon: Icon, title, desc, duration }, i) => (
              <article
                key={num}
                className="group relative flex gap-5 p-5 md:p-6 rounded-2xl transition-all duration-400 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = `${Y[400]}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                }}
              >
                {/* Large faded number */}
                <span
                  className="absolute top-2 right-4 text-[48px] md:text-[64px] font-black leading-none select-none pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1px ${Y[400]}15`,
                  }}
                >
                  {num}
                </span>

                {/* Icon */}
                <div
                  className="relative shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${Y[400]}08`,
                    border: `1px solid ${Y[400]}15`,
                  }}
                >
                  <Icon size={18} style={{ color: Y[400] }} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3
                      className="text-[16px] md:text-[18px] font-black tracking-[-0.02em]"
                      style={{ color: "#fff" }}
                    >
                      {title}
                    </h3>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        background: `${Y[400]}08`,
                        color: Y[400],
                        border: `1px solid ${Y[400]}12`,
                      }}
                    >
                      {duration}
                    </span>
                  </div>
                  <p
                    className="text-[13px] md:text-[14px] leading-[1.7]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Hover arrow */}
                <div
                  className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                >
                  <ArrowRight size={16} style={{ color: Y[400] }} />
                </div>
              </article>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => scrollToId("start")}
                className="group flex items-center gap-3 px-7 py-4 rounded-xl text-[14px] font-black transition-all duration-300 w-full md:w-auto justify-center md:justify-start"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 20px ${Y[400]}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${Y[400]}35`;
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${Y[400]}20`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Start Your Project
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}