"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { scrollToId } from "../utils/scrollTo";

import heroImg from "../assets/hero.webp";
import logo from "../assets/logo.webp";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zenova",
  url: "https://zenova.dev",
  logo: "https://zenova.dev/logo.webp",
  description: "Premium MVP development agency building revenue-generating SaaS and AI products in 4-6 weeks.",
};

function FloatBadge({ icon: Icon, label, value, position, delay = 0 }) {
  return (
    <div
      className="absolute z-20 rounded-xl px-4 py-3 backdrop-blur-md"
      style={{
        ...position,
        background: "rgba(10,10,18,0.92)",
        border: `1px solid ${Y[400]}22`,
        boxShadow: `0 12px 40px rgba(0,0,0,0.6), 0 0 24px ${Y[400]}10`,
        animation: `heroFloat 5s ease-in-out ${delay}s infinite`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${Y[400]}10`, border: `1px solid ${Y[400]}20` }}
        >
          <Icon size={16} style={{ color: Y[400] }} aria-hidden="true" />
        </div>
        <div>
          <div
            className="text-[10px] uppercase tracking-[0.15em] font-bold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {label}
          </div>
          <div
            className="text-[14px] font-black mt-0.5"
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

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      <section
        id="top"
        aria-label="Zenova MVP Development Agency"
        className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 px-6 md:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #06060c 0%, #0a0a14 40%, #08080f 100%)",
        }}
      >
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${Y[500]}08, transparent 65%)`,
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${Y[400]}06, transparent 60%)`,
            filter: "blur(60px)",
          }}
        />

        {/* Dot Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(250,204,21,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 20%, transparent 70%)",
          }}
        />

        {/* MAIN GRID */}
        <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Content */}
          <header className="lg:col-span-5 xl:col-span-5">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
              style={{
                background: `${Y[400]}08`,
                border: `1px solid ${Y[400]}15`,
                color: Y[400],
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: Y[400] }}
              />
              MVP Development Agency
            </div>

            <h1
              className="text-[clamp(2.2rem,4.8vw,3.4rem)] font-black leading-[1.06] tracking-[-0.03em]"
              style={{ color: "#fff" }}
            >
              We Build{" "}
              <span style={{ color: Y[400] }}>SaaS & AI</span>
              <br />
              Products That
              <br />
              Make You Money
            </h1>

            <p
              className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Stop waiting 6 months for a broken MVP. We ship{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                revenue-ready products
              </strong>{" "}
              in 4-6 weeks. You focus on growth, we handle the code.
            </p>

            <nav aria-label="Services" className="mt-5 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {s}
                </span>
              ))}
            </nav>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#start"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("start");
                }}
                className="relative group overflow-hidden rounded-xl px-7 py-3.5 text-[14px] font-black tracking-[-0.01em] transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 20px ${Y[400]}25`,
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
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.5}
                    className="group-hover:rotate-45 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <a
                href="#shipped"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("shipped");
                }}
                className="group flex items-center gap-2 px-5 py-3.5 rounded-xl text-[14px] font-bold transition-all duration-300"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = Y[400];
                  e.currentTarget.style.borderColor = `${Y[400]}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                View Our Work
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
            </div>
          </header>

          {/* RIGHT: Image */}
          <aside
            className="lg:col-span-7 xl:col-span-7 relative lg:-mt-8"
            aria-label="Product preview"
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-20"
                style={{ background: Y[500] }}
                aria-hidden="true"
              />

              <figure className="relative rounded-3xl overflow-hidden m-0">
                <img
                  src={heroImg}
                  alt="Zenova SaaS dashboard with revenue analytics and real-time data visualization"
                  className="relative w-full h-auto rounded-3xl object-cover"
                  width="900"
                  height="600"
                  loading="eager"
                  fetchpriority="high"
                  style={{
                    border: `1px solid ${Y[400]}12`,
                    boxShadow: `0 40px 100px rgba(0,0,0,0.7)`,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(6,6,12,0.85) 100%)",
                  }}
                  aria-hidden="true"
                />
              </figure>

              {/* Business Badges */}
              <FloatBadge
                icon={TrendingUp}
                label="Monthly Revenue"
                value="$48,500"
                position={{ top: "5%", left: "-5%" }}
                delay={0}
              />
              <FloatBadge
                icon={Users}
                label="Active Users"
                value="12,400+"
                position={{ top: "15%", right: "-4%" }}
                delay={1.2}
              />
              <FloatBadge
                icon={Rocket}
                label="Shipped In"
                value="4 Weeks"
                position={{ bottom: "20%", left: "-6%" }}
                delay={2.4}
              />
              <FloatBadge
                icon={ShieldCheck}
                label="Uptime SLA"
                value="99.9%"
                position={{ bottom: "8%", right: "-3%" }}
                delay={1.8}
              />
            </div>
          </aside>
        </div>

        <style>{`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes heroShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </section>
    </>
  );
}