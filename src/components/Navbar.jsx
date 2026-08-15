"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Rocket,
  Clock,
  Users,
  Play,
  Star,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [hoveredLink, setHoveredLink] = useState(null);
  const navRef = useRef(null);

  const Y = {
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["top", "how", "build", "team", "pricing", "testimonials", "start"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "How We Work", id: "how", icon: Clock, tag: "Our Process" },
    { label: "Build", id: "build", icon: Code2, tag: "What We Create" },
    { label: "Team", id: "team", icon: Users, tag: "Our Experts" },
    { label: "Pricing", id: "pricing", icon: CreditCard, tag: "Plans & Pricing" },
    { label: "Testimonials", id: "testimonials", icon: Star, tag: "Client Stories" },
  ];

  const getUnderline = (id) => {
    if (!navRef.current || !id) return { left: 0, width: 0 };
    const btn = navRef.current.querySelector(`[data-nav="${id}"]`);
    if (!btn) return { left: 0, width: 0 };
    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    return {
      left: btnRect.left - navRect.left,
      width: btnRect.width,
    };
  };

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  useEffect(() => {
    const targetId = hoveredLink || (activeSection !== "top" ? activeSection : null);
    if (targetId) {
      const pos = getUnderline(targetId);
      setUnderline({ ...pos, visible: true });
    } else {
      setUnderline((p) => ({ ...p, visible: false }));
    }
  }, [activeSection, hoveredLink]);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out"
        style={{
          background: scrolled
            ? "rgba(12, 12, 16, 0.92)"
            : "rgba(14, 14, 20, 0.85)",
          backdropFilter: "blur(20px) saturate(1.2)",
          WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          borderBottom: scrolled
            ? "1px solid rgba(250,204,21,0.15)"
            : "1px solid rgba(250,204,21,0.06)",
          boxShadow: scrolled
            ? "0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(250,204,21,0.02)"
            : "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[60px] sm:h-[68px] md:h-[72px] lg:h-[80px]">
            
            {/* LOGO - Responsive */}
            <button
              onClick={() => scrollToId("top")}
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group relative flex-shrink-0"
            >
              {/* Glow effect - Hidden on mobile */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 hidden sm:block"
                style={{
                  background: `radial-gradient(circle, ${Y[400]}15, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />
              
              {/* Logo Icon */}
              <div className="relative">
                <div
                  className="absolute -inset-1.5 sm:-inset-2 rounded-lg sm:rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${Y[400]}20, ${Y[500]}10)`,
                    border: `1px solid ${Y[400]}15`,
                  }}
                />
                <img
                  src={logo}
                  alt="ZenovaLab"
                  className="relative h-6 sm:h-7 md:h-8 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                />
              </div>

              {/* Brand Name - Responsive */}
              <div className="flex items-baseline">
                <span
                  className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-black tracking-[-0.04em] leading-none"
                  style={{
                    color: "#fff",
                    textShadow: `0 0 40px ${Y[400]}20`,
                  }}
                >
                  Zen
                </span>
                <span
                  className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-black tracking-[-0.04em] leading-none"
                  style={{
                    color: Y[400],
                    textShadow: `0 0 40px ${Y[400]}40`,
                  }}
                >
                  ova
                </span>
                <span
                  className="text-sm sm:text-base md:text-lg lg:text-[20px] font-bold tracking-[-0.02em] leading-none ml-0.5 sm:ml-1"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Lab
                </span>
                <Sparkles
                  size={12}
                  className="ml-1 sm:ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12 hidden sm:block"
                  style={{ color: Y[400] }}
                />
              </div>
            </button>

            {/* CENTER NAV - Desktop only - Process Removed */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center gap-0.5 relative"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {links.map(({ label, id }) => {
                const isActive = activeSection === id;
                const isHover = hoveredLink === id;
                return (
                  <button
                    key={id}
                    data-nav={id}
                    onClick={() => scrollToId(id)}
                    onMouseEnter={() => setHoveredLink(id)}
                    className="relative px-3 xl:px-4 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium tracking-[-0.01em] transition-all duration-300"
                    style={{
                      color: isActive
                        ? Y[400]
                        : isHover
                        ? "#ffffff"
                        : "rgba(255,255,255,0.5)",
                      background: isActive 
                        ? `${Y[400]}08` 
                        : isHover 
                        ? "rgba(255,255,255,0.04)" 
                        : "transparent",
                      textShadow: isActive
                        ? `0 0 20px ${Y[400]}30`
                        : isHover
                        ? "0 0 20px rgba(255,255,255,0.1)"
                        : "none",
                      transform: isHover ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    {label}
                  </button>
                );
              })}

              {/* Active / Hover underline */}
              <span
                className="absolute bottom-0 h-[2px] rounded-full transition-all duration-500 ease-out"
                style={{
                  left: underline.left,
                  width: underline.width,
                  background: hoveredLink
                    ? `linear-gradient(90deg, ${Y[300]}, ${Y[400]}, ${Y[500]})`
                    : `linear-gradient(90deg, ${Y[400]}, ${Y[500]})`,
                  boxShadow: hoveredLink
                    ? `0 0 20px ${Y[300]}40, 0 0 40px ${Y[400]}20`
                    : `0 0 20px ${Y[400]}50, 0 0 40px ${Y[400]}20`,
                  opacity: underline.visible ? 1 : 0,
                  transform: underline.visible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "center",
                }}
              />
            </nav>

            {/* RIGHT SIDE - CTA Button - Desktop only */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <button
                onClick={() => scrollToId("start")}
                className="group relative px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl text-[12px] xl:text-[13px] font-bold transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 20px ${Y[400]}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${Y[400]}35`;
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${Y[400]}20`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                  Start Project
                  <ArrowUpRight
                    size={13}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "navShimmer 2s ease-in-out infinite",
                  }}
                />
              </button>
            </div>

            {/* MOBILE TOGGLE - Mobile only */}
            <button
              className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0"
              onClick={() => setOpen((o) => !o)}
              style={{
                background: open ? `${Y[400]}12` : "rgba(255,255,255,0.03)",
                border: open
                  ? `1px solid ${Y[400]}25`
                  : "1px solid rgba(255,255,255,0.06)",
                color: open ? Y[400] : "#fff",
              }}
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Menu
                  size={20}
                  strokeWidth={2}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open
                      ? "opacity-0 rotate-45 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={20}
                  strokeWidth={2}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-45 scale-50"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #0C0C10 0%, #14120A 40%, #0C0C10 100%)",
          }}
          onClick={() => setOpen(false)}
        />

        {/* Decorative glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${Y[400]}08, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 overflow-y-auto">
          {/* Heading */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "80ms" : "0ms" }}
          >
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase"
              style={{ color: Y[400] }}
            >
              Navigation
            </span>
            <div className="h-px w-10 sm:w-12 mt-2" style={{ background: Y[400] }} />
          </div>

          {/* Links - Process Removed */}
          <div className="space-y-0.5 sm:space-y-1">
            {links.map(({ label, id, tag, icon: Icon }, i) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(id), 150);
                  }}
                  className={`w-full text-left group transition-all duration-700 ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 80 + 150}ms` : "0ms",
                  }}
                >
                  <div
                    className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300"
                    style={{
                      background: isActive ? `${Y[400]}0A` : "transparent",
                      border: isActive
                        ? `1px solid ${Y[400]}15`
                        : "1px solid transparent",
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive
                          ? `${Y[400]}15`
                          : "rgba(255,255,255,0.03)",
                        border: isActive
                          ? `1px solid ${Y[400]}20`
                          : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <Icon
                        size={15}
                        className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]"
                        style={{
                          color: isActive ? Y[400] : "rgba(255,255,255,0.3)",
                        }}
                      />
                    </div>

                    {/* Label + Tag */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-lg sm:text-xl md:text-2xl font-bold tracking-[-0.02em] leading-none transition-colors duration-300"
                        style={{
                          color: isActive ? Y[400] : "#fff",
                          textShadow: isActive
                            ? `0 0 30px ${Y[400]}30`
                            : "none",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-[10px] sm:text-[11px] font-medium tracking-wide mt-1 transition-colors duration-300"
                        style={{
                          color: isActive
                            ? Y[300]
                            : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {tag}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive
                          ? `${Y[400]}10`
                          : "rgba(255,255,255,0.02)",
                        border: isActive
                          ? `1px solid ${Y[400]}15`
                          : "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <ArrowUpRight
                        size={13}
                        strokeWidth={2.5}
                        className="sm:w-[14px] sm:h-[14px] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{
                          color: isActive
                            ? Y[400]
                            : "rgba(255,255,255,0.15)",
                        }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div
            className={`mt-6 sm:mt-8 pt-5 sm:pt-6 transition-all duration-700 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: open ? "500ms" : "0ms",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollToId("start"), 150);
              }}
              className="w-full group relative px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-[14px] sm:text-[15px] font-bold transition-all duration-300 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                color: "#0a0a0f",
                boxShadow: `0 4px 20px ${Y[400]}20`,
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes navShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
}