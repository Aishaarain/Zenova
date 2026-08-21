import React, { useCallback, useState } from "react";
import { Mail, Linkedin, Github, Check, Copy, ArrowRight, AlertCircle, Sparkles, Send } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

// ============================================
// ✅ USING ENVIRONMENT VARIABLES
// ============================================
// .env (Production) -> VITE_API_URL=https://zenova-lab-backend.vercel.app/api/contact
// .env.local (Development) -> VITE_API_URL=http://localhost:5000/api/contact
// ============================================

const API_URL = import.meta.env.VITE_API_URL;
const CONTACT_EMAIL = "hello.zenova.co@gmail.com";

// Debug log to check which URL is being used
console.log("🌐 API_URL:", API_URL);
console.log("🔧 Environment:", import.meta.env.MODE);

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    projectType: "Web application", 
    budget: "Under $1,500", 
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = useCallback(async () => {
    // Validation
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      console.log("📤 Sending to:", API_URL);
      console.log("📦 Form data:", form);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "Not specified",
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
        }),
      });

      const data = await res.json();
      console.log("📥 Response:", data);

      if (res.ok && data.success) {
        setStatus("idle");
        setSubmitted(true);
        setForm({ 
          name: "", 
          email: "", 
          company: "", 
          projectType: "Web application", 
          budget: "Under $1,500", 
          message: "" 
        });
      } else {
        console.error("❌ Server error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [form]);

  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const inputStyle = { 
    background: "rgba(20,20,40,0.4)", 
    border: "1px solid rgba(255,255,255,0.06)", 
    color: "#fff", 
    fontFamily: "var(--font-body)",
    transition: "all 0.3s ease",
  };
  
  const fieldClass = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#FACC15] placeholder:text-[rgba(255,255,255,0.3)]";

  return (
    <section 
      id="start" 
      aria-label="Contact ZenovaLab - Start your project"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #0f0f12 0%, #141418 40%, #0f0f12 100%)" 
      }}
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(250,204,21,0.04), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(250,204,21,0.03), transparent 50%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, rgba(250,204,21,0.06), transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="lg:col-span-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{
              background: "rgba(250,204,21,0.10)",
              border: "1px solid rgba(250,204,21,0.20)",
              color: "#FACC15",
            }}
          >
            <Sparkles size={12} style={{ color: "#FACC15" }} />
            Get in touch
          </div>

          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            Tell us what you're building
          </h2>

          <p
            className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] max-w-md"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Fill in the form and we'll reply within a day.
          </p>

          {/* Show API URL for debugging (only in development) */}
          {import.meta.env.DEV && (
            <div className="mt-4 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                📡 API: <span style={{ color: "#FACC15" }}>{API_URL}</span>
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                Mode: {import.meta.env.MODE}
              </p>
            </div>
          )}
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div 
              className="rounded-xl sm:rounded-2xl p-8 sm:p-10 flex flex-col items-start gap-4"
              style={{ 
                border: "1px solid rgba(255,255,255,0.06)", 
                background: "rgba(20,20,40,0.4)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ 
                  background: "rgba(250,204,21,0.12)",
                  border: "1px solid rgba(250,204,21,0.20)",
                }}
              >
                <Check size={24} style={{ color: "#FACC15" }} />
              </div>
              <h3
                className="text-2xl font-black"
                style={{ color: "#fff" }}
              >
                Message sent! 
              </h3>
              <p
                className="text-[14px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Thanks for reaching out we'll get back to you within a day.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="text-[13px] font-semibold transition-all duration-300 hover:scale-105"
                style={{ color: "#FACC15" }}
              >
                Send another message →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {status === "error" && (
                <div 
                  className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                  style={{ 
                    border: "1px solid rgba(239,68,68,0.3)", 
                    background: "rgba(239,68,68,0.08)", 
                    color: "#ef4444" 
                  }}
                >
                  <AlertCircle size={15} />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                  >
                    Name *
                  </label>
                  <input 
                    className={fieldClass} 
                    style={inputStyle} 
                    value={form.name} 
                    onChange={update("name")} 
                    placeholder="Your name"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#FACC15";
                      e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                  >
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className={fieldClass} 
                    style={inputStyle} 
                    value={form.email} 
                    onChange={update("email")} 
                    placeholder="you@company.com"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#FACC15";
                      e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                >
                  Company
                </label>
                <input 
                  className={fieldClass} 
                  style={inputStyle} 
                  value={form.company} 
                  onChange={update("company")} 
                  placeholder="Optional"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FACC15";
                    e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                  }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                  >
                    Project type
                  </label>
                  <select 
                    className={fieldClass} 
                    style={inputStyle} 
                    value={form.projectType} 
                    onChange={update("projectType")}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#FACC15";
                      e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                    }}
                  >
                    <option style={{ background: "#141418" }}>Web application</option>
                    <option style={{ background: "#141418" }}>AI integration</option>
                    <option style={{ background: "#141418" }}>Internal tool / dashboard</option>
                    <option style={{ background: "#141418" }}>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label 
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                  >
                    Budget
                  </label>
                  <select 
                    className={fieldClass} 
                    style={inputStyle} 
                    value={form.budget} 
                    onChange={update("budget")}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#FACC15";
                      e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                    }}
                  >
                    <option style={{ background: "#141418" }}>Under $500</option>
                    <option style={{ background: "#141418" }}>$200 – $500</option>
                    <option style={{ background: "#141418" }}>$500 – $800</option>
                    <option style={{ background: "#141418" }}>$1000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  className="text-[11px] font-bold uppercase tracking-wider block mb-1.5"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                >
                  What are you building? *
                </label>
                <textarea 
                  rows={4} 
                  className={fieldClass} 
                  style={inputStyle} 
                  value={form.message} 
                  onChange={update("message")} 
                  placeholder="Tell us about the project, timeline, and goals."
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FACC15";
                    e.currentTarget.style.background = "rgba(20,20,40,0.6)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(20,20,40,0.4)";
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-black transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: status === "sending" 
                    ? "rgba(255,255,255,0.1)" 
                    : `linear-gradient(135deg, #FACC15, #EAB308)`,
                  color: status === "sending" ? "rgba(255,255,255,0.5)" : "#0a0a0f",
                  boxShadow: status === "sending" ? "none" : `0 4px 20px rgba(250,204,21,0.20)`,
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    e.currentTarget.style.boxShadow = `0 0 30px rgba(250,204,21,0.35)`;
                    e.currentTarget.style.transform = "scale(1.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending") {
                    e.currentTarget.style.boxShadow = `0 4px 20px rgba(250,204,21,0.20)`;
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <ArrowRight 
                      size={16} 
                      strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}