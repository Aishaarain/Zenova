import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Replace this block with a real quote as soon as you have one — remove the
// whole section from App.jsx until then. A fabricated testimonial does more
// harm than a missing one.
export default function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Client feedback</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            What early clients say
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-12 max-w-2xl">
          <div className="p-8 rounded-xl border border-dashed" style={{ borderColor: "var(--border-strong)", color: "var(--text-faint)" }}>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              [ Add your first quote here once you have one — even a short line
              from a past freelance client works. Real testimonials convert far
              better than a placeholder, so remove this section entirely until
              you have one you can attribute by name. ]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
