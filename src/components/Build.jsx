"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import buildImg from "../assets/Build.webp";

// Yellow color
const Y = {
  400: "#FACC15",
};

// Projects data
const projects = [
  {
    name: "Cliently",
    tag: "CRM App",
    problem: "Freelancers lose clients in messy spreadsheets.",
    solution: "We built a clean CRM with AI that writes proposals for you.",
    outcome: "Now live with real users and revenue.",
    link: "https://cliently-crm-freelance.vercel.app/",
  },
  {
    name: "StudyAI",
    tag: "AI Study Helper",
    problem: "Students waste hours searching through long PDFs.",
    solution: "We made an AI that reads documents and gives instant answers.",
    outcome: "Handles thousands of questions daily.",
    link: "https://aipowered-study-buddy.vercel.app/",
  },
];

export default function Build() {
  return (
    <section
      id="build"
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ background: "#06060c" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top Part */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <span
              className="inline-block px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
              style={{
                background: `${Y[400]}10`,
                border: `1px solid ${Y[400]}20`,
                color: Y[400],
              }}
            >
              Our Work
            </span>

            <h2
              className="text-3xl md:text-4xl font-black tracking-tight leading-tight"
              style={{ color: "#fff" }}
            >
              Products We Have <span style={{ color: Y[400] }}>Built</span>
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Real apps. Real users. Real money. No fake screenshots these are live products running in production right now.
            </p>
          </div>

          {/* Your Build Image */}
          <div className="hidden lg:block">
            <img
              src={buildImg}
              alt="Zenova team coding and building web applications"
              className="w-full rounded-2xl object-cover"
              style={{
                height: "220px",
                border: `1px solid ${Y[400]}10`,
                opacity: 0.9,
              }}
            />
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl p-6 md:p-8 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${Y[400]}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left: Name */}
                <div className="md:col-span-4">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: Y[400] }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-2xl font-black mt-2 mb-4" style={{ color: "#fff" }}>
                    {p.name}
                  </h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold"
                    style={{
                      background: `${Y[400]}10`,
                      border: `1px solid ${Y[400]}20`,
                      color: Y[400],
                    }}
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-8 space-y-3">
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <strong style={{ color: "#fff" }}>Problem:</strong> {p.problem}
                  </p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <strong style={{ color: "#fff" }}>What we built:</strong> {p.solution}
                  </p>
                  <p className="text-[14px] font-semibold" style={{ color: Y[400] }}>
                    ✓ {p.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[14px] font-bold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Want something like this? Start your project →
          </a>
        </div>
      </div>
    </section>
  );
}