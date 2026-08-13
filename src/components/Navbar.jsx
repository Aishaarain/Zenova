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
      const ids = ["top", "build", "shipped", "how", "testimonials", "pricing", "team", "start"];
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
    { label: "How", id: "How", icon: Clock, tag: "On time. On budget. Every time." },
    { label: "Build", id: "Build", icon: Code2, tag: "What we develop for you" },
    { label: "Process", id: "process", icon: Rocket, tag: "Products making money now" },
{ label: "Team", id: "team", icon: Users, tag: "Senior engineers only" },
 { label: "Pricing", id: "pricing", icon: CreditCard, tag: "Transparent pricing plans" },
    { label: "Testimonials", id: "testimonials", icon: Star, tag: "What clients say about us" },
    { label: "Start", id: "start", icon: Play, tag: "Launch your project" },
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
      {/* ═══════════ HEADER ═══════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        style={{
          background: scrolled
            ? "linear-gradient(180deg, #0C0C10 0%, #0A0A0E 100%)"
            : "linear-gradient(180deg, #0E0E14 0%, #0B0B10 100%)",
          borderBottom: scrolled
            ? "1px solid rgba(250,204,21,0.18)"
            : "1px solid rgba(250,204,21,0.08)",
          boxShadow: scrolled
            ? "0 20px 60px rgba(0,0,0,0.6), 0 0 100px rgba(250,204,21,0.03)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="flex items-center justify-between h-[80px]">
            {/* ─── LOGO (Wapas Pehle Jaisa) ─── */}
            <button
              onClick={() => scrollToId("top")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${Y[400]}20, ${Y[500]}10)`,
                    border: `1px solid ${Y[400]}15`,
                  }}
                />
                <img
                  src={logo}
                  alt="Zenova Labs"
                  className="relative h-9 w-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span
                className="text-[28px] font-black tracking-[-0.04em] leading-none select-none"
                style={{
                  color: "#fff",
                  textShadow: `0 0 40px ${Y[400]}30`,
                }}
              >
                Zen
                <span style={{ color: Y[400] }}>ova</span>
              </span>
            </button>

            {/* ─── CENTER NAV ─── */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center gap-1 relative"
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
                    className="relative px-4 py-2.5 rounded-lg text-[15px] font-bold tracking-[-0.02em] transition-all duration-300"
                    style={{
                      color: isActive
                        ? Y[400]
                        : isHover
                        ? "#ffffff"
                        : "rgba(255,255,255,0.45)",
                      textShadow: isActive
                        ? `0 0 20px ${Y[400]}50`
                        : isHover
                        ? "0 0 20px rgba(255,255,255,0.15)"
                        : "none",
                    }}
                  >
                    {label}
                  </button>
                );
              })}

              {/* Active / Hover underline */}
              <span
                className="absolute bottom-0 h-[3px] rounded-full transition-all duration-400 ease-out"
                style={{
                  left: underline.left,
                  width: underline.width,
                  background: hoveredLink
                    ? `linear-gradient(90deg, ${Y[300]}, ${Y[400]})`
                    : `linear-gradient(90deg, ${Y[400]}, ${Y[500]})`,
                  boxShadow: hoveredLink
                    ? `0 0 12px ${Y[300]}50, 0 2px 6px ${Y[400]}30`
                    : `0 0 16px ${Y[400]}60, 0 2px 8px ${Y[400]}30`,
                  opacity: underline.visible ? 1 : 0,
                  transform: underline.visible ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                }}
              />
            </nav>

            {/* ─── MOBILE TOGGLE ─── */}
            <button
              className="lg:hidden relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              onClick={() => setOpen((o) => !o)}
              style={{
                background: open ? `${Y[400]}12` : "rgba(255,255,255,0.04)",
                border: open
                  ? `1px solid ${Y[400]}25`
                  : "1px solid rgba(255,255,255,0.06)",
                color: open ? Y[400] : "#fff",
              }}
            >
              <div className="relative w-5 h-5">
                <Menu
                  size={22}
                  strokeWidth={2.5}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open
                      ? "opacity-0 rotate-45 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={22}
                  strokeWidth={2.5}
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

      {/* ═══════════ FULLSCREEN MOBILE ═══════════ */}
      {/* ═══════════ FULLSCREEN MOBILE ═══════════ */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
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
              "linear-gradient(160deg, #0C0C10 0%, #0F0E08 50%, #0C0C10 100%)",
          }}
          onClick={() => setOpen(false)}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 py-10 sm:py-12 overflow-y-auto">
          {/* Heading */}
          <div
            className={`mb-6 sm:mb-10 transition-all duration-700 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "80ms" : "0ms" }}
          >
            <span
              className="text-[11px] sm:text-[13px] font-bold tracking-[0.25em] uppercase"
              style={{ color: Y[400] }}
            >
              Navigation
            </span>
          </div>

          {/* Links */}
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
                    transitionDelay: open ? `${i * 70 + 150}ms` : "0ms",
                  }}
                >
                  <div
                    className="flex items-center gap-3 sm:gap-5 px-2 sm:px-3 py-3.5 sm:py-5 rounded-2xl transition-all duration-300"
                    style={{
                      background: isActive ? `${Y[400]}0A` : "transparent",
                      borderLeft: isActive
                        ? `3px solid ${Y[400]}`
                        : "3px solid transparent",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="text-[12px] sm:text-[14px] font-mono font-bold w-6 sm:w-8 shrink-0"
                      style={{
                        color: isActive
                          ? Y[400]
                          : "rgba(255,255,255,0.12)",
                      }}
                    >
                      0{i + 1}
                    </span>

                    {/* Label + Tag */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[22px] sm:text-[28px] md:text-[32px] font-black tracking-[-0.03em] leading-none transition-colors duration-300 truncate"
                        style={{
                          color: isActive ? Y[400] : "#fff",
                          textShadow: isActive
                            ? `0 0 30px ${Y[400]}40`
                            : "none",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-[11px] sm:text-[13px] font-semibold tracking-wide mt-1 sm:mt-1.5 transition-colors duration-300 truncate"
                        style={{
                          color: isActive
                            ? Y[300]
                            : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {tag}
                      </div>
                    </div>

                    {/* Arrow icon */}
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive
                          ? `${Y[400]}15`
                          : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? `1px solid ${Y[400]}20`
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.5}
                        className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:w-[18px] sm:h-[18px]"
                        style={{
                          color: isActive
                            ? Y[400]
                            : "rgba(255,255,255,0.2)",
                        }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* ─── Keyframes ─── */}
      <style>{`
        @keyframes navShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}