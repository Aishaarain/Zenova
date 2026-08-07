import React from "react";

export default function CTAButton({ children, onClick, variant = "solid", className = "", ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap";

  if (variant === "solid") {
    return (
      <button
        onClick={onClick}
        className={`${base} ${className}`}
        style={{ background: "var(--accent)", color: "#0B0D12", fontFamily: "var(--font-body)" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${className}`}
      style={{ border: "1px solid var(--border-strong)", color: "var(--text)", fontFamily: "var(--font-body)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-strong)";
        e.currentTarget.style.color = "var(--text)";
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
