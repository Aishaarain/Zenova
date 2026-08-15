import React, { useCallback, useState } from "react";
import { 
  Mail, Linkedin, Check, Copy, AlertCircle, 
  Send, User, Building2, MessageSquare, DollarSign, FileText,
  Instagram, Facebook, MessageCircle, ArrowRight
} from "lucide-react";

const CONTACT_EMAIL = "hello.zenova.co@gmail.com";
const API_URL = "http://localhost:5000/api/contact";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    projectType: "Web application", 
    budget: "", 
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = useCallback(async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("idle");
        setSubmitted(true);
        setForm({ name: "", email: "", company: "", projectType: "Web application", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }, [form]);

  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Social Links Configuration
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/zenovalab/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/zenovalab.it/", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/zenovalab.it", label: "Facebook" },
    { icon: MessageCircle, href: "https://threads.net/@zenovalab.it", label: "Threads" },
  ];

  // Unified premium input class
  const fieldClass = "w-full px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[rgba(255,255,255,0.25)] bg-[rgba(10,10,26,0.6)] border border-[rgba(250,204,21,0.15)] rounded-xl focus:bg-[#0a0a1a] focus:border-[#FACC15] focus:shadow-[0_0_25px_rgba(250,204,21,0.1)] focus:ring-1 focus:ring-[#FACC15]/20 text-white";

  return (
    <section 
      id="start" 
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        background: "linear-gradient(160deg, #0a0a0f 0%, #1a1508 25%, #2a1f00 50%, #1a1508 75%, #0a0a0f 100%)" 
      }}
    >
      {/* Animated Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-40%] left-[-20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.15),transparent_60%)] blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-40%] right-[-20%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.1),transparent_60%)] blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            {/* Badge */}
            <div
              className="inline-flex self-start items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 sm:mb-5 backdrop-blur-sm"
              style={{
                background: "rgba(250,204,21,0.10)",
                border: "1px solid rgba(250,204,21,0.25)",
                color: "#FACC15",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse" />
              Get in touch
            </div>

            {/* Heading - Left Aligned */}
            <h2 
              className="text-[clamp(1.8rem,5vw,3.2rem)] font-black leading-[1.1] tracking-[-0.03em] mb-3 sm:mb-4 text-left"
              style={{ color: "#fff", fontFamily: "var(--font-display)" }}
            >
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-[#FACC15] to-[#EAB308] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(250,204,21,0.3)]">
                Amazing Together
              </span>
            </h2>

            <p 
              className="text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-md text-left"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Fill in the form and we'll reply within a day. We're excited to hear about your project and bring your vision to life.
            </p>

            {/* Direct Email - Premium Glass Card */}
            <div 
              className="group relative p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] backdrop-blur-md mb-5"
              style={{
                background: "rgba(10,10,26,0.6)",
                border: "1px solid rgba(250,204,21,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
              }}
              onClick={copyEmail}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div 
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.2), rgba(250,204,21,0.05))" }}
                  >
                    <Mail size={16} sm:size={20} style={{ color: "#FACC15" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>
                      Email us directly
                    </p>
                    <p className="text-[11px] sm:text-sm font-semibold tracking-wide truncate" style={{ color: "#FACC15" }}>{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <button 
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all duration-300 flex-shrink-0"
                  style={{
                    background: copied ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.05)",
                    color: copied ? "#4ade80" : "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={12} />
                      <span className="hidden xs:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span className="hidden xs:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Icons - Moved Up */}
            <div className="pt-4 sm:pt-5 border-t" style={{ borderColor: "rgba(250,204,21,0.08)" }}>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-3 sm:mb-4" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}>
                Connect with us
              </p>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 sm:p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                    style={{
                      background: "rgba(10,10,26,0.5)",
                      border: "1px solid rgba(250,204,21,0.08)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FACC15";
                      e.currentTarget.style.borderColor = "rgba(250,204,21,0.4)";
                      e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(250,204,21,0.2)";
                      e.currentTarget.style.background = "rgba(250,204,21,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.style.borderColor = "rgba(250,204,21,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = "rgba(10,10,26,0.5)";
                    }}
                  >
                    <social.icon size={16} sm:size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form Glass Container */}
          <div className="lg:col-span-3 relative mt-6 lg:mt-0">
            {/* Glowing border effect for the form card */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#FACC15]/30 via-transparent to-[#FACC15]/10 rounded-[1.6rem] blur-sm opacity-50 transition-opacity duration-500 hover:opacity-100"></div>
            
            <div className="relative p-5 sm:p-6 md:p-8 rounded-3xl backdrop-blur-xl h-full" style={{ background: "rgba(10,10,15,0.7)", border: "1px solid rgba(255,255,255,0.05)" }}>
              {submitted ? (
                <div 
                  className="h-full min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center text-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl"
                  style={{
                    border: "1px solid rgba(74,222,128,0.2)",
                    background: "rgba(74,222,128,0.05)",
                  }}
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center animate-pulse"
                    style={{ background: "rgba(74,222,128,0.1)", boxShadow: "0 0 40px rgba(74,222,128,0.2)" }}
                  >
                    <Check size={28} sm:size={36} style={{ color: "#4ade80" }} />
                  </div>
                  <h3 
                    className="text-2xl sm:text-3xl font-black tracking-tight"
                    style={{ color: "#fff", fontFamily: "var(--font-display)" }}
                  >
                    Message Sent
                  </h3>
                  <p 
                    className="text-sm leading-relaxed max-w-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-2 text-sm transition-all hover:scale-105 flex items-center gap-2 group"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Send another message 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-5">
                  {status === "error" && (
                    <div 
                      className="flex items-center gap-3 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-xl animate-fade-in"
                      style={{ 
                        border: "1px solid rgba(239,68,68,0.3)", 
                        background: "rgba(239,68,68,0.08)", 
                        color: "#ef4444" 
                      }}
                    >
                      <AlertCircle size={16} sm:size={18} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Full Name <span style={{ color: "#FACC15" }}>*</span>
                      </label>
                      <input 
                        className={fieldClass} 
                        value={form.name} 
                        onChange={update("name")} 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Email Address <span style={{ color: "#FACC15" }}>*</span>
                      </label>
                      <input 
                        type="email" 
                        className={fieldClass} 
                        value={form.email} 
                        onChange={update("email")} 
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Company
                    </label>
                    <input 
                      className={fieldClass} 
                      value={form.company} 
                      onChange={update("company")} 
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Project Type
                      </label>
                      <select 
                        className={fieldClass} 
                        value={form.projectType} 
                        onChange={update("projectType")}
                      >
                        <option style={{ background: "#0a0a0f" }}>Web application</option>
                        <option style={{ background: "#0a0a0f" }}>AI integration</option>
                        <option style={{ background: "#0a0a0f" }}>Internal tool / dashboard</option>
                        <option style={{ background: "#0a0a0f" }}>Mobile application</option>
                        <option style={{ background: "#0a0a0f" }}>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Budget Range
                      </label>
                      <input 
                        className={fieldClass} 
                        value={form.budget} 
                        onChange={update("budget")} 
                        placeholder="e.g., $5k - $10k"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2 block"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      What are you building? <span style={{ color: "#FACC15" }}>*</span>
                    </label>
                    <textarea 
                      rows={4} 
                      className={`${fieldClass} resize-none`} 
                      value={form.message} 
                      onChange={update("message")} 
                      placeholder="Tell us about the project, timeline, and goals..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="group relative w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-[14px] font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, #FACC15, #EAB308)`,
                      color: "#0a0a0f",
                      boxShadow: `0 10px 30px -5px rgba(250,204,21,0.4)`,
                    }}
                  >
                    {/* Shine Sweep Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                    
                    <span className="relative flex items-center gap-2 sm:gap-2.5">
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={14} sm:size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}