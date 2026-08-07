import React from "react";

export default function Eyebrow({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-4"
      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
    >
      <span className="inline-block w-4 h-px" style={{ background: "var(--accent)" }} />
      {children}
    </span>
  );
}
