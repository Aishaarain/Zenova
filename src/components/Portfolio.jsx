import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

const PROJECTS = [
  {
    name: "Cliently",
    tag: "Multi-tenant CRM",
    problem: "Freelancers lose track of their pipeline across scattered spreadsheets and DMs.",
    solution: "A workspace-based CRM with role-based access and an AI feature that drafts client proposals for you.",
    outcome: "Deployed and running multi-tenant in production.",
    link: "https://cliently-crm-freelance.vercel.app/",
  },
  {
    name: "StudyAI",
    tag: "Retrieval-augmented Q&A",
    problem: "Students need direct, sourced answers from long documents — not another search bar.",
    solution: "A custom RAG pipeline built from primitives, no orchestration framework, so every step is inspectable and fast.",
    outcome: "Production RAG pipeline, batched to avoid memory limits at scale.",
    link: "https://aipowered-study-buddy.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Selected projects</Eyebrow>
            <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
             Products we've built 
            </h2>
          </div>
         
        </Reveal>

        <div className="mt-16 space-y-px" style={{ background: "var(--border)" }}>
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-8 md:p-10 group transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--bg)" }}
            >
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                  {p.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                  {p.name}
                </h3>
              </div>
              <div className="md:col-span-6 space-y-3">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text)" }}>Problem — </span>{p.problem}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text)" }}>Solution — </span>{p.solution}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text)" }}>Outcome — </span>{p.outcome}
                </p>
              </div>
              <div className="md:col-span-3 flex items-start">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
                    style={{ border: "1px solid var(--border-strong)", color: "var(--text)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-strong)";
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    View live demo
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full"
                    style={{ border: "1px solid var(--border)", color: "var(--text-faint)" }}
                  >
                    Coming soon
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}