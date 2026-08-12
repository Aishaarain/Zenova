import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// Add your testimonial images to /src/assets (or /public) and list them here.
// Each entry needs a src; alt/name/role are optional but recommended for
// accessibility. Screenshots of DMs, emails, or review sites all work.
const testimonials = [
  {
    src: "src/assets/testimonials/test1.png",
    alt: "Testimonial of client",
  },
  // {
  //   src: "/testimonials/client-2.png",
  //   alt: "Testimonial from Mark at Studio X",
  //   name: "Mark Lee",
  //   role: "Product Lead, Studio X",
  // },
];

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="testimonials" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Client feedback</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            What early clients say
          </h2>
        </Reveal>

        {hasTestimonials ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.src} delay={100 + i * 80}>
                <figure
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "var(--border-strong)", background: "var(--bg-alt)" }}
                >
                  <img
                    src={t.src}
                    alt={t.alt || `Testimonial${t.name ? ` from ${t.name}` : ""}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  {(t.name || t.role) && (
                    <figcaption
                      className="px-5 py-4 text-sm"
                      style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {t.name && <span style={{ color: "var(--text)" }}>{t.name}</span>}
                      {t.name && t.role && " — "}
                      {t.role}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100} className="mt-12 max-w-2xl">
            <div className="p-8 rounded-xl border border-dashed" style={{ borderColor: "var(--border-strong)", color: "var(--text-faint)" }}>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
                [ No testimonial images added yet. Drop image files into
                /src/assets (or /public/testimonials) and add entries to the
                `testimonials` array at the top of this file — each just
                needs a `src`, plus optional `name`/`role`. This placeholder
                disappears automatically once the array isn't empty. ]
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}