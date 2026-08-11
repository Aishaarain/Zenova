import React from "react";
import { scrollToId } from "../utils/scrollTo";

const navLinks = ["capabilities", "work", "process", "contact"];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/compile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/compile.studio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/compile.studio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.68l.4-3.11h-3.08V7.9c0-.9.25-1.51 1.54-1.51h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.28H7.5V13h2.86v8h3.14z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "https://facebook.com/compile.studio",
   icon: (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
),
  },
];

export default function Footer() {
   const Y = {
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
  };
  return (
    <footer className="px-6 md:px-10 py-16 relative" style={{ borderTop: "1px solid var(--border)" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.5,
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-xs">
          <div
            className="text-lg font-semibold"
            style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}
          >
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
          </div>
          <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-faint)" }}>
          We build SaaS &amp; AI products that actually make you money.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {navLinks.map(function (id) {
            return (
              <button
                key={id}
                type="button"
                onClick={function () {
                  scrollToId(id);
                }}
                className="capitalize transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {id}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {socials.map(function (s) {
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {s.icon}
              </a>
            );
          })}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs"
        style={{ borderTop: "1px solid var(--border)", color: "var(--text-faint)" }}
      >
        <span>© {new Date().getFullYear()} compile studio. All rights reserved.</span>
      
      </div>
    </footer>
  );
}