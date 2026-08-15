"use client";

import React from "react";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
  Sparkles,
  Zap,
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
    icon: MessageSquare,
    title: "Discovery Call",
    desc: "30-min call to understand your product, market, and revenue goals.",
    duration: "Day 1",
  },
  {
    icon: PenTool,
    title: "Design & Scope",
    desc: "Wireframes and fixed scope within 48 hours. One price. One timeline.",
    duration: "Days 2-3",
  },
  {
    icon: Code2,
    title: "Build & Ship",
    desc: "Weekly sprints with live demos. React, Next.js, Node — whatever you need.",
    duration: "Weeks 2-5",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    desc: "Deploy to AWS/Vercel, connect domain, and hand over clean code.",
    duration: "Week 6",
  },
  {
    icon: Headphones,
    title: "30-Day Support",
    desc: "Free bug fixes and tweaks for 30 days post-launch.",
    duration: "Ongoing",
  },
];

export default function HowWeWork() {
  const sectionContent = {
    badge: "Fast Track Development",
    heading: "From Idea to Live Product in 4–6 Weeks",
    description: "No 50-page proposals. No 3-month delays. Our proven 5-step development process is built for founders who want to move fast, ship faster, and start generating revenue.",
    cta: "Start Your Project",
    imageAlt: "ZenovaLab agile software development process showing design sprints, coding, and product launch workflow"
  };

  return (
    <section
      id="how"
      aria-label="ZenovaLab software development process - From idea to launch in 4-6 weeks"
      className="relative py-10 sm:py-14 md:py-18 lg:py-22 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a18 0%, #0f0e1a 30%, #0d0d1a 60%, #0a0a18 100%)",
      }}
    >
      {/* Premium Mesh Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 30% 20%, rgba(250,204,21,0.06) 0px, transparent 50%),
            radial-gradient(at 70% 80%, rgba(168,85,247,0.05) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(250,204,21,0.03) 0px, transparent 60%)
          `,
        }}
      />

      {/* Decorative Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${Y[400]}08, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto w-full">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14 lg:mb-18">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${Y[400]}12, rgba(168,85,247,0.08))`,
              border: `1px solid ${Y[400]}15`,
              color: Y[400],
              boxShadow: `0 0 30px ${Y[400]}05`,
            }}
          >
            <Zap size={12} className="sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]" style={{ color: Y[400] }} />
            {sectionContent.badge}
           
          </div>

          {/* Heading */}
          <h2
            className="text-[clamp(1.6rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            {sectionContent.heading.split(" ").map((word, i) => {
              if (word === "4–6" || word === "Weeks") {
                return (
                  <span key={i} style={{ color: Y[400] }}>
                    {word}{" "}
                  </span>
                );
              }
              return <span key={i}>{word} </span>;
            })}
          </h2>

          {/* Description */}
          <p
            className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.7] max-w-xl mx-auto px-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {sectionContent.description}
          </p>
        </header>

        {/* CONTENT GRID - Image Right, Steps Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Steps Cards - 2 per row */}
          <div className="order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {steps.map(({ icon: Icon, title, desc, duration }, i) => (
                <article
                  key={i}
                  className="group relative flex flex-col gap-2 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid rgba(255,255,255,0.04)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(255,255,255,0.04)`;
                    e.currentTarget.style.borderColor = `${Y[400]}25`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${Y[400]}05`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="relative shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${Y[400]}10`,
                      border: `1px solid ${Y[400]}15`,
                    }}
                  >
                    <Icon size={14} className="sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px]" style={{ color: Y[400] }} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <h3
                        className="text-[12px] sm:text-[13px] md:text-[15px] font-black tracking-[-0.02em]"
                        style={{ color: "#fff" }}
                      >
                        {title}
                      </h3>
                      <span
                        className="text-[6px] sm:text-[7px] md:text-[8px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded flex-shrink-0"
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
                      className="text-[10px] sm:text-[11px] md:text-[12px] leading-[1.4] sm:leading-[1.5]"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight size={12} className="sm:w-[13px] sm:h-[13px]" style={{ color: Y[400] }} />
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4 sm:mt-5 md:mt-6">
              <button
                onClick={() => scrollToId("start")}
                className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl text-[12px] sm:text-[13px] md:text-[14px] font-black transition-all duration-300 w-full sm:w-auto justify-center"
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
                {sectionContent.cta}
                <ArrowRight
                  size={13}
                  className="sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px]"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>

          {/* RIGHT: Process Image - Clean, No Text */}
          <aside className="relative order-2">
            <div className="relative">
              {/* Premium Border Effect */}
              <div
                className="absolute -inset-[2px] rounded-xl sm:rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]}30, rgba(168,85,247,0.2), ${Y[400]}20)`,
                  padding: "2px",
                  boxShadow: `0 0 30px ${Y[400]}08`,
                }}
              >
                <div className="w-full h-full rounded-xl sm:rounded-2xl" style={{ background: "#0a0a18" }} />
              </div>

              <figure className="relative rounded-xl sm:rounded-2xl overflow-hidden m-0">
                <img
                  src={processImg}
                  alt={sectionContent.imageAlt}
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl object-cover aspect-[4/3]"
                  width="700"
                  height="525"
                  loading="lazy"
                  style={{
                    border: `1px solid ${Y[400]}08`,
                  }}
                />

                {/* Bottom fade */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(10,10,24,0.9) 100%)",
                  }}
                  aria-hidden="true"
                />
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
