import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CTAButton from "./ui/CTAButton";
import { scrollToId } from "../utils/scrollTo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Capabilities", "capabilities"],
    ["Work", "work"],
    ["Process", "process"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,13,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollToId("top")} className="flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
          <span className="text-lg md:text-xl font-semibold" style={{ color: "var(--text)" }}>
            compile<span style={{ color: "var(--accent)" }}>/</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="text-sm relative group"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: "var(--accent)" }} />
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton onClick={() => scrollToId("contact")}>
            Book a call <ArrowUpRight size={15} />
          </CTAButton>
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} style={{ color: "var(--text)" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(11,13,18,0.98)", borderBottom: "1px solid var(--border)" }}>
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                setOpen(false);
                scrollToId(id);
              }}
              className="text-left text-base py-1"
              style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
            >
              {label}
            </button>
          ))}
          <CTAButton onClick={() => { setOpen(false); scrollToId("contact"); }} className="mt-2 w-full">
            Book a call <ArrowUpRight size={15} />
          </CTAButton>
        </div>
      )}
    </header>
  );
}
