"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Smartphone,
  Layout,
  Server,
} from "lucide-react";
import { scrollToId } from "../utils/scrollTo";

import heroImg from "../assets/hero.webp";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZenovaLab",
  url: "https://zenovalab.it.com",
  logo: "https://zenovalab.it.com/logo.webp",
  description: "Premium MVP development agency building revenue-generating SaaS and AI products in 4-6 weeks.",
  sameAs: [
    "https://linkedin.com/company/zenovalab",
    "https://github.com/zenovalab"
  ]
};

// Info Cards - No Animation, Responsive
function InfoCard({ icon: Icon, label, value, position, delay = 0 }) {
  return (
    <div
      className="absolute z-20 rounded-xl sm:rounded-2xl px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 md:py-2.5 backdrop-blur-xl"
      style={{
        ...position,
        background: "rgba(10,10,18,0.88)",
        border: `1px solid ${Y[400]}20`,
        boxShadow: `0 8px 30px rgba(0,0,0,0.6)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
        <div
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center"
          style={{
            background: `${Y[400]}15`,
            border: `1px solid ${Y[400]}20`,
          }}
        >
          <Icon size={12} className="sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]" style={{ color: Y[400] }} aria-hidden="true" />
        </div>
        <div>
          <div
            className="text-[6px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {label}
          </div>
          <div
            className="text-[10px] sm:text-[11px] md:text-[13px] font-black mt-0.5 tracking-[-0.02em]"
            style={{ color: "#fff" }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const services = [
    "MVP Development",
    "SaaS Platforms",
    "AI Automation",
    "Custom Web Apps",
  ];

  const heroContent = {
    badge: "Ship in Weeks, Not Months",
    heading: {
      prefix: "We Build",
      highlight: "SaaS & AI",
      suffix: "Products That Make You Money"
    },
    description: "Stop waiting 6 months for a broken MVP. ZenovaLab ships revenue-ready SaaS and AI solutions in just 4-6 weeks. We handle the entire process from design to deployment so you can grow your business.",
    cta: {
      primary: "Start Your Project",
      secondary: "View Our Work"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      <section
        id="top"
        aria-label="ZenovaLab - Premium MVP Development Agency for SaaS and AI Products"
        className="relative min-h-screen flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #050508 0%, #0A0A12 30%, #0F0E08 60%, #080810 100%)",
        }}
      >
        {/* Animated Background Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, ${Y[400]}06 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, ${Y[500]}04 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, ${Y[400]}05 0%, transparent 50%)
            `,
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-20%] right-[-10%] w-[600px] sm:w-[700px] md:w-[900px] h-[600px] sm:h-[700px] md:h-[900px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${Y[500]}06, transparent 70%)`,
            filter: "blur(80px)",
            animation: "orbFloat 8s ease-in-out infinite alternate",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[500px] sm:w-[600px] md:w-[700px] h-[500px] sm:h-[600px] md:h-[700px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${Y[400]}05, transparent 70%)`,
            filter: "blur(60px)",
            animation: "orbFloat 10s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Dot Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(rgba(250,204,21,0.06) 1px, transparent 1px),
              radial-gradient(rgba(250,204,21,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px, 24px 24px",
            maskImage: "linear-gradient(to bottom, black 10%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 80%)",
          }}
        />

        {/* MAIN GRID */}
        <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Content */}
          <header className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left w-full">
            {/* Premium Badge - Clean */}
            <div
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 md:mb-5"
              style={{
                background: `linear-gradient(135deg, ${Y[400]}10, ${Y[500]}05)`,
                border: `1px solid ${Y[400]}15`,
                color: Y[400],
                boxShadow: `0 0 30px ${Y[400]}08`,
              }}
            >
              {heroContent.badge}
            </div>

            {/* Heading - NO UNDERLINE */}
            <h1
              className="text-[clamp(1.6rem,4.5vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em] w-full"
              style={{ color: "#fff" }}
            >
              {heroContent.heading.prefix}{" "}
              <span 
                className="inline-block"
                style={{ 
                  color: Y[400],
                  textShadow: `0 0 40px ${Y[400]}20`,
                }}
              >
                {heroContent.heading.highlight}
              </span>
              <br />
              {heroContent.heading.suffix}
            </h1>

            {/* Description */}
            <p
              className="mt-3 sm:mt-4 md:mt-5 max-w-md text-[13px] sm:text-[14px] md:text-[16px] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] w-full"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {heroContent.description}
            </p>

            {/* Service Tags */}
            <nav aria-label="Our Services" className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-1.5 w-full">
              {services.map((s, i) => (
                <span
                  key={s}
                  className="px-2.5 sm:px-3 md:px-3.5 py-1 rounded-lg text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(250,204,21,0.04))`,
                    border: `1px solid rgba(255,255,255,0.06)`,
                    color: i === 0 ? Y[400] : "rgba(255,255,255,0.4)",
                    boxShadow: i === 0 ? `0 0 20px ${Y[400]}08` : "none",
                  }}
                >
                  {s}
                </span>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="mt-5 sm:mt-6 md:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-4 w-full">
              <a
                href="#start"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("start");
                }}
                className="relative group overflow-hidden rounded-xl px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-[12px] sm:text-[13px] md:text-[14px] font-black tracking-[-0.01em] transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 25px ${Y[400]}25`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${Y[400]}35`;
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 25px ${Y[400]}25`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "heroShimmer 2s ease-in-out infinite",
                  }}
                />
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  {heroContent.cta.primary}
                  <ArrowUpRight
                    size={13}
                    className="sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              </a>

              <a
                href="#build"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("build");
                }}
                className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl text-[12px] sm:text-[13px] md:text-[14px] font-bold transition-all duration-300"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = Y[400];
                  e.currentTarget.style.borderColor = `${Y[400]}25`;
                  e.currentTarget.style.background = `${Y[400]}08`;
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {heroContent.cta.secondary}
                <ArrowRight
                  size={13}
                  className="sm:w-[14px] sm:h-[14px]"
                />
              </a>
            </div>
          </header>

          {/* RIGHT: Image with Prominent Border & Responsive Cards */}
          <aside
            className="lg:col-span-7 xl:col-span-7 relative lg:-mt-8"
            aria-label="ZenovaLab Product Showcase"
          >
            <div className="relative">
              {/* Image with Prominent Border */}
              <figure className="relative rounded-xl sm:rounded-2xl overflow-hidden m-0 shadow-2xl">
                <div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                  style={{
                    border: `2px solid ${Y[400]}30`,
                    boxShadow: `0 0 40px ${Y[400]}15, 0 30px 80px rgba(0,0,0,0.7), inset 0 0 60px ${Y[400]}05`,
                  }}
                >
                  <img
                    src={heroImg}
                    alt="ZenovaLab SaaS platform dashboard showcasing revenue analytics, user metrics, and AI-powered business intelligence tools"
                    className="relative w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                    width="900"
                    height="600"
                    loading="eager"
                    fetchpriority="high"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(6,6,12,0.9) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </figure>

              {/* Responsive Info Cards - No Animation */}
              <InfoCard
                icon={Globe}
                label="Web Apps"
                value="Full Stack"
                position={{ 
                  top: "2%", 
                  left: "-1%",
                  transform: "translateX(0)"
                }}
              />
              <InfoCard
                icon={Smartphone}
                label="Mobile"
                value="Responsive"
                position={{ 
                  top: "10%", 
                  right: "-1%",
                  transform: "translateX(0)"
                }}
              />
              <InfoCard
                icon={Layout}
                label="Design"
                value="UI/UX"
                position={{ 
                  bottom: "25%", 
                  left: "-2%",
                  transform: "translateX(0)"
                }}
              />
              <InfoCard
                icon={Server}
                label="Backend"
                value="Scalable"
                position={{ 
                  bottom: "8%", 
                  right: "-1%",
                  transform: "translateX(0)"
                }}
              />
            </div>
          </aside>
        </div>

        {/* Styles */}
        <style>{`
          @keyframes heroShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(20px, -15px) scale(1.05); }
          }
        `}</style>
      </section>
    </>
  );
}