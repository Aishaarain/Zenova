import React from "react";
import { Check, Sparkles, ArrowRight, Zap, Rocket, Shield, Star, Crown } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Pricing Data - Contact for Pricing Approach
const TIERS = [
  { 
    name: "MVP Launch",
    icon: Rocket,
    desc: "Perfect for startups and founders ready to test their idea with a minimum viable product.",
    features: [
      "Core feature development",
      "Database & auth setup", 
      "Basic UI/UX design",
      "2-3 weeks delivery"
    ],
  },
  { 
    name: "Full Product",
    icon: Zap,
    desc: "End-to-end product development with AI integration, designed for scale and revenue generation.",
    features: [
      "Complete MERN stack build",
      "AI/RAG integration",
      "Custom UI/UX design",
      "Weekly progress demos",
      "Production deployment",
      "30-day free support"
    ],
  },
  { 
    name: "Enterprise Suite",
    icon: Crown,
    desc: "Everything you need to scale your product with dedicated support, advanced AI features, and full-stack development.",
    features: [
      "Everything in Full Product",
      "Dedicated development team",
      "Advanced AI/ML features",
      "Custom integrations",
      "24/7 priority support",
      "Monthly strategy & growth calls",
      "Performance optimization",
      "Security & compliance audit"
    ],
  },
];

export default function Pricing() {
  const sectionContent = {
    eyebrow: "Investment",
    heading: "Build Your Product, Your Way",
    subheading: "Every project is unique. We'll work with you to create a custom plan that fits your budget and goals.",
    cta: "Contact for Pricing",
  };

  return (
    <section 
      id="pricing" 
      aria-label="ZenovaLab pricing - Contact for custom quotes"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #0f0f12 0%, #141418 40%, #0f0f12 100%)" 
      }}
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(250,204,21,0.04), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(250,204,21,0.03), transparent 50%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, rgba(250,204,21,0.06), transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header - Reduced Space */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3"
            style={{
              background: "rgba(250,204,21,0.10)",
              border: "1px solid rgba(250,204,21,0.20)",
              color: "#FACC15",
            }}
          >
            <Sparkles size={12} style={{ color: "#FACC15" }} />
            {sectionContent.eyebrow}
          </div>

          <h2
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            {sectionContent.heading}
          </h2>

          <p
            className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {sectionContent.subheading}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300"
              style={{
                background: "rgba(20,20,40,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(250,204,21,0.20)";
                e.currentTarget.style.background = "rgba(20,20,40,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "rgba(20,20,40,0.6)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: "rgba(250,204,21,0.08)",
                  border: "1px solid rgba(250,204,21,0.10)",
                }}
              >
                <t.icon size={22} style={{ color: "#FACC15" }} />
              </div>

              {/* Name */}
              <h3
                className="text-xl sm:text-2xl font-black tracking-[-0.02em]"
                style={{ color: "#fff" }}
              >
                {t.name}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] sm:text-[14px] leading-relaxed mt-2 mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {t.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {t.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] sm:text-[14px]">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: "#FACC15" }} />
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Yellow Background */}
              <button
                onClick={() => scrollToId("start")}
                className="w-full group flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, #FACC15, #EAB308)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 20px rgba(250,204,21,0.20)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(250,204,21,0.35)`;
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(250,204,21,0.20)`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {sectionContent.cta}
                <ArrowRight 
                  size={14} 
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}