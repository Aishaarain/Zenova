import React from "react";
import CTAButton from "./ui/CTAButton";
import { scrollToId } from "../utils/scrollTo";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-14" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-lg font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            compile<span style={{ color: "var(--accent)" }}>/</span>
          </div>
          <p className="text-sm mt-2 max-w-xs" style={{ color: "var(--text-faint)" }}>
            MERN &amp; AI product studio, built for UK/US founders who need to move fast.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm" style={{ color: "var(--text-muted)" }}>
          <button onClick={() => scrollToId("capabilities")}>Capabilities</button>
          <button onClick={() => scrollToId("work")}>Work</button>
          <button onClick={() => scrollToId("process")}>Process</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </div>
        <CTAButton variant="outline" onClick={() => scrollToId("contact")}>
          Book a call
        </CTAButton>
      </div>
      <div className="max-w-7xl mx-auto mt-10 text-xs" style={{ color: "var(--text-faint)" }}>
        © {new Date().getFullYear()} compile studio. Built with React + Tailwind.
      </div>
    </footer>
  );
}
