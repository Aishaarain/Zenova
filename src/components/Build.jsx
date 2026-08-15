"use client";

import React from "react";
import { ExternalLink, ArrowRight, Sparkles, Zap, CheckCircle } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import buildImg from "../assets/Build.webp";

// Yellow color
const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

// Projects data - SEO Optimized
const projects = [
  {
    name: "Cliently",
    tag: "CRM App",
    problem: "Freelancers and agencies struggle with managing clients in spreadsheets.",
    solution: "We built a smart CRM with AI that automates proposal writing and client management.",
    outcome: "Successfully serving freelancers and agencies with active revenue growth.",
    link: "https://cliently-crm-freelance.vercel.app/",
    features: ["AI Proposal Generator", "Client Management", "Revenue Tracking"]
  },
  {
    name: "StudyAI",
    tag: "AI Study Assistant",
    problem: "Students waste hours manually searching through lengthy PDF documents.",
    solution: "We created an AI-powered study tool that reads documents and provides instant answers.",
    outcome: "Empowering thousands of students with instant access to knowledge.",
    link: "https://aipowered-study-buddy.vercel.app/",
    features: ["PDF Analysis", "Instant Answers", "Smart Search"]
  },
];

export default function Build() {
  // SEO Optimized Content
  const sectionContent = {
    badge: "Our Portfolio",
    heading: "Products We Have Built",
    description: "Real apps. Real users. Real revenue — every product listed here is live in production and delivering value to customers right now.",
    cta: "Start Your Project",
    imageAlt: "ZenovaLab team building web applications and SaaS products"
  };

  return (
    <section
      id="build"
      aria-label="ZenovaLab portfolio - Live products and case studies"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0f12 0%, #141418 40%, #0f0f12 100%)",
      }}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${Y[400]}06, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-4 sm:mb-6">
          <div>
            {/* Badge */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase"
              style={{
                background: `${Y[400]}10`,
                border: `1px solid ${Y[400]}20`,
                color: Y[400],
              }}
            >
             
              {sectionContent.badge}
            </span>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mt-1.5 sm:mt-2"
              style={{ color: "#fff" }}
            >
              Products We Have <span style={{ color: Y[400] }}>Built</span>
            </h2>

            {/* Description */}
            <p
              className="mt-1 text-[13px] sm:text-[14px] leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {sectionContent.description}
            </p>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                border: `2px solid ${Y[400]}25`,
                boxShadow: `0 0 40px ${Y[400]}10, 0 0 80px ${Y[400]}05`,
              }}
            >
              <img
                src={buildImg}
                alt={sectionContent.imageAlt}
                className="w-full object-cover"
                style={{
                  height: "260px",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(15,15,18,0.4) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Cards - With Border */}
        <div className="space-y-3 sm:space-y-4">
          {projects.map((p, index) => (
            <div
              key={p.name}
              className="group rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(40,40,50,0.5), rgba(30,30,40,0.3))",
                border: `2px solid rgba(255,255,255,0.15)`,
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${Y[400]}40`;
                e.currentTarget.style.background = `linear-gradient(135deg, rgba(40,40,50,0.6), rgba(30,30,40,0.4))`;
                e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(40,40,50,0.5), rgba(30,30,40,0.3))";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
                {/* Left: Name & Tag */}
                <div className="md:col-span-4">
                  <span
                    className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider"
                    style={{ color: Y[400] }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mt-0.5 mb-1.5 sm:mb-2" style={{ color: "#fff" }}>
                    {p.name}
                  </h3>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    {p.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold px-2 py-1 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: `1px solid rgba(255,255,255,0.1)`,
                          color: "rgba(255,255,255,0.75)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-300 hover:scale-105"
                    style={{
                      background: `${Y[400]}10`,
                      border: `1px solid ${Y[400]}20`,
                      color: Y[400],
                    }}
                  >
                    Live Demo
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-8 space-y-1.5 sm:space-y-2">
                  <div className="flex items-start gap-2">
                    <span 
                      className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider mt-0.5"
                      style={{ color: Y[400] }}
                    >
                      Problem
                    </span>
                    <p 
                      className="text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {p.problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider mt-0.5"
                      style={{ color: Y[400] }}
                    >
                      Solution
                    </span>
                    <p 
                      className="text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {p.solution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <CheckCircle size={13} style={{ color: Y[400] }} />
                    <span 
                      className="text-[12px] sm:text-[13px] md:text-[14px] font-bold"
                      style={{ color: Y[400] }}
                    >
                      {p.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Button */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <button
            onClick={() => scrollToId("start")}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-[14px] font-black transition-all duration-300 hover:scale-105"
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
            {sectionContent.cta}
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
