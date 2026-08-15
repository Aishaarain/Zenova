import React from "react";
import { Sparkles } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Founder data - Mixed Skills (Both have everything)
const FOUNDERS = [
  {
    name: "Anamta Batool",
    title: "Founder & Lead Developer",
    role: "Full Stack & AI Development",
    desc: "Building web applications with React, Node.js, and MongoDB while also working with AI, Python, and modern APIs. Passionate about writing clean code and creating seamless user experiences that people love to use.",
    skills: ["React/Next.js", "Node.js", "Python/AI", "MongoDB", "UI/UX Design"],
  },
  {
    name: "Aisha Arain",
    title: "Co-Founder & AI Engineer",
    role: "AI & Full Stack Development",
    desc: "Working with AI, Python, and modern APIs while also building full-stack applications with React, Node.js, and PostgreSQL. Focused on solving real business problems through automation and data-driven solutions.",
    skills: ["Python/AI", "RAG Systems", "React/Next.js", "PostgreSQL", "API Development"],
  },
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
}

export default function About() {
  // Simple Content
  const sectionContent = {
    eyebrow: "Meet the Team",
    heading: "The Minds Behind ZenovaLab",
    subheading: "Creating digital products that solve real problems",
  };

  return (
    <section 
      id="team" 
      aria-label="ZenovaLab team - Meet our founders"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ 
        background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)" 
      }}
    >
      {/* Simple Background Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(250,204,21,0.04), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(250,204,21,0.03), transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header - Simple */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4"
            style={{
              background: "rgba(250,204,21,0.10)",
              border: "1px solid rgba(250,204,21,0.20)",
              color: "#FACC15",
            }}
          >
            
            {sectionContent.eyebrow}
          </div>

          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            {sectionContent.heading.split(" ").map((word, i) => {
              if (word === "ZenovaLab") {
                return (
                  <span key={i} style={{ color: "#FACC15" }}>
                    {word}{" "}
                  </span>
                );
              }
              return <span key={i}>{word} </span>;
            })}
          </h2>

          <p
            className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {sectionContent.subheading}
          </p>
        </div>

        {/* Team Cards - Permanent Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {FOUNDERS.map((f, i) => (
            <div
              key={f.name}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
              style={{
                background: "rgba(20,20,40,0.6)",
                border: "1px solid rgba(250,204,21,0.20)",
              }}
            >
              {/* Avatar - Gold Theme */}
              <div
                className="w-14 h-14 rounded-full mb-4 flex items-center justify-center text-lg font-black"
                style={{
                  background: "rgba(250,204,21,0.12)",
                  border: "1px solid rgba(250,204,21,0.20)",
                  color: "#FACC15",
                }}
              >
                {getInitials(f.name)}
              </div>

              {/* Name & Title */}
              <h3
                className="text-xl sm:text-2xl font-black tracking-[-0.02em]"
                style={{ color: "#fff" }}
              >
                {f.name}
              </h3>
              <div
                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] mt-1 mb-2"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {f.title}
              </div>
              <div
                className="text-[12px] sm:text-[13px] font-semibold mb-3"
                style={{ color: "#FACC15" }}
              >
                {f.role}
              </div>

              {/* Description - Mixed Skills */}
              <p
                className="text-[13px] sm:text-[14px] leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {f.desc}
              </p>

              {/* Skills Tags - Gold Theme */}
              <div className="flex flex-wrap gap-1.5">
                {f.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[8px] sm:text-[9px] font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(250,204,21,0.06)",
                      border: "1px solid rgba(250,204,21,0.10)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
