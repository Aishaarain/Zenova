import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { scrollToId } from "../utils/scrollTo";

// ✅ Aapki local images — src/assets se import
import heroImg from "../assets/hero.webp"; // ya .png / .jpg jo bhi format ho
import logo from "../assets/logo.webp";

const Y = {
  300: "#FDE047",
  400: "#FACC15",
  500: "#EAB308",
  600: "#CA8A04",
};

/* ─── Schema Markup ─── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zenova",
  url: "https://zenova.dev",
  logo: "https://zenova.dev/logo.webp",
  description: "Premium MVP development agency building revenue-generating SaaS and AI products in 4-6 weeks.",
  sameAs: ["https://github.com/zenova", "https://linkedin.com/company/zenova"],
};

function FloatBadge({ icon: Icon, label, value, position, delay = 0 }) {
  return (
    <div
      className="absolute z-10 rounded-2xl px-4 py-3 backdrop-blur-md"
      style={{
        ...position,
        background: "rgba(10,10,18,0.9)",
        border: `1px solid ${Y[400]}20`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${Y[400]}10`,
        animation: `heroFloat 6s ease-in-out ${delay}s infinite`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${Y[400]}12`, border: `1px solid ${Y[400]}25` }}
        >
          <Icon size={14} style={{ color: Y[400] }} aria-hidden="true" />
        </div>
        <div>
          <div
            className="text-[10px] uppercase tracking-widest font-bold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {label}
          </div>
          <div
            className="text-[13px] font-bold mt-0.5"
            style={{ color: Y[400] }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const stats = [
    { num: "50+", label: "Startups Launched", icon: Zap },
    { num: "$2M+", label: "Revenue Generated for Clients", icon: Sparkles },
    { num: "4-6", label: "Weeks Average Delivery", icon: ShieldCheck },
  ];

  const techStack = [
    "React & Next.js",
    "Node.js & Python",
    "OpenAI & LLM Integration",
    "AWS & Vercel Scale",
  ];

  const services = [
    "MVP Development",
    "SaaS Platforms",
    "AI Automation",
    "Custom Web Apps",
  ];

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      <section
        id="top"
        aria-label="Zenova MVP Development Agency Hero"
        className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #08080f 0%, #0c0c16 50%, #08080f 100%)",
        }}
      >
        {/* ─── Ambient Glow Orbs ─── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${Y[500]}12, transparent 60%)`,
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${Y[400]}08, transparent 60%)`,
            filter: "blur(50px)",
          }}
        />

        {/* ─── Dot Grid Pattern ─── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(250,204,21,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, black 30%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 80%)",
          }}
        />

        {/* ═══════════ MAIN GRID ═══════════ */}
        <div className="relative max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── LEFT: Content ─── */}
          <header className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-bold tracking-[0.15em] uppercase mb-6"
              style={{
                background: `${Y[400]}08`,
                border: `1px solid ${Y[400]}18`,
                color: Y[400],
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: Y[400] }}
              />
              Full-Stack MVP Agency
            </div>

            {/* ═══ H1 ═══ */}
            <h1
              className="text-[clamp(2.5rem,5.5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em]"
              style={{ color: "#fff" }}
            >
              We Build{" "}
              <span style={{ color: Y[400] }}>SaaS & AI Products</span>
              <br />
              That Actually Make
              <br />
              You Money
            </h1>

            {/* ─── Description ─── */}
            <p
              className="mt-6 max-w-lg text-[16px] md:text-[17px] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Stop waiting 6 months for a broken MVP. Zenova ships{" "}
              <strong style={{ color: "#fff" }}>revenue-ready products</strong>{" "}
              in <strong style={{ color: "#fff" }}>4-6 weeks</strong>. From AI
              chatbots to SaaS dashboards — we handle the full stack so you can
              focus on growth.
            </p>

            {/* ─── Service Tags ─── */}
            <nav aria-label="Services" className="mt-5 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {s}
                </span>
              ))}
            </nav>

            {/* ─── CTAs ─── */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#start"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("start");
                }}
                className="relative group overflow-hidden rounded-xl px-8 py-4 text-[15px] font-black tracking-[-0.01em] transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${Y[400]} 0%, ${Y[500]} 100%)`,
                  color: "#0a0a0f",
                  boxShadow: `0 4px 20px ${Y[400]}30`,
                }}
                aria-label="Start your project with Zenova"
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "heroShimmer 2s ease-in-out infinite",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover:rotate-45 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <a
                href="#shipped"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("shipped");
                }}
                className="group flex items-center gap-2.5 px-6 py-4 rounded-xl text-[15px] font-bold transition-all duration-300"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="View portfolio"
              >
                See Our Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* ─── Tech Trust ─── */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-[13px] font-semibold"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: Y[400] }}
                    aria-hidden="true"
                  />
                  {t}
                </span>
              ))}
            </div>
          </header>

          {/* ─── RIGHT: Your Local Hero Image ─── */}
          <aside
            className="lg:col-span-6 xl:col-span-6 relative"
            aria-label="Product showcase preview"
          >
            <div
              className="relative"
              style={{
                transform:
                  "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
              }}
            >
              <figure className="relative rounded-3xl overflow-hidden m-0">
                {/* Glow behind */}
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-25"
                  style={{ background: Y[400] }}
                  aria-hidden="true"
                />

                {/* ✅ AAPKI LOCAL HERO IMAGE */}
                <img
                  src={heroImg}
                  alt="Zenova SaaS dashboard with AI analytics, revenue tracking, and real-time data visualization built with React and Next.js"
                  className="relative w-full h-auto rounded-3xl object-cover aspect-[4/3]"
                  width="800"
                  height="600"
                  loading="eager"
                  fetchpriority="high"
                  style={{
                    border: `1px solid ${Y[400]}15`,
                    boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${Y[400]}08`,
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(8,8,15,0.8) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Live indicator */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{
                      background: Y[400],
                      boxShadow: `0 0 12px ${Y[400]}`,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[13px] font-bold tracking-wide"
                    style={{ color: Y[400] }}
                  >
                    zenova.dev — Production Ready
                  </span>
                </figcaption>
              </figure>

              {/* Floating Badges */}
              <FloatBadge
                icon={Zap}
                label="Build"
                value="Passing"
                position={{ top: "-6%", left: "-8%" }}
                delay={0}
              />
              <FloatBadge
                icon={Sparkles}
                label="AI Layer"
                value="LLM Integrated"
                position={{ top: "30%", right: "-10%" }}
                delay={1.5}
              />
              <FloatBadge
                icon={ShieldCheck}
                label="Deploy"
                value="Live on AWS"
                position={{ bottom: "8%", left: "-6%" }}
                delay={3}
              />
              <FloatBadge
                icon={Globe}
                label="Uptime"
                value="99.9% SLA"
                position={{ bottom: "-4%", right: "8%" }}
                delay={2}
              />
            </div>
          </aside>
        </div>

        {/* ═══════════ STATS BAR ═══════════ */}
        <footer
          className="relative max-w-[1400px] mx-auto w-full mt-20"
          aria-label="Company statistics"
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${Y[400]}08`,
              boxShadow: `0 0 40px ${Y[400]}04`,
            }}
          >
            {stats.map(({ num, label, icon: Icon }, i) => (
              <article
                key={label}
                className="flex items-center gap-5 px-8 py-7"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${Y[400]}08`,
                    border: `1px solid ${Y[400]}12`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: Y[400] }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-black tracking-[-0.03em] leading-none"
                    style={{ color: Y[400] }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[13px] font-semibold mt-1.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {label}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </footer>

        <style>{`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes heroShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </section>
    </>
  );
}