import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

const PROJECTS = [
  {
    name: "Cliently",
    tag: "Multi-tenant CRM",
    problem: "Freelancers lose track of their pipeline across scattered spreadsheets and DMs.",
    solution: "A workspace-based CRM with role-based access and an AI feature that drafts client proposals for you.",
    stack: ["React", "Node.js", "MongoDB", "JWT / RBAC", "Groq LLaMA"],
    outcome: "Deployed and running multi-tenant in production.",
  },
  {
    name: "StudyAI",
    tag: "Retrieval-augmented Q&A",
    problem: "Students need direct, sourced answers from long documents — not another search bar.",
    solution: "A custom RAG pipeline built from primitives, no orchestration framework, so every step is inspectable and fast.",
    stack: ["Cohere embeddings", "Supabase pgvector", "Groq", "Edge functions"],
    outcome: "Production RAG pipeline, batched to avoid memory limits at scale.",
  },
  {
    name: "RiskGuard AI",
    tag: "Cyber risk scoring for SMEs",
    problem: "Small businesses have no simple way to see where their security risk actually sits.",
    solution: "A scoring platform pairing a Node backend with a Python ML service, so the score updates as risk factors change.",
    stack: ["React", "Node.js", "Flask / FastAPI", "JWT auth"],
    outcome: "In active build — architecture and auth complete.",
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
              Products we've built ourselves
            </h2>
          </div>
          <p className="max-w-sm text-sm" style={{ color: "var(--text-muted)" }}>
            Before we build for clients, we build for ourselves. These are live products, not mockups.
          </p>
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
              <div className="md:col-span-3 flex flex-wrap content-start gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ border: "1px solid var(--border-strong)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
