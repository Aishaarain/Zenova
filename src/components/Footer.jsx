import React from "react";
import { scrollToId } from "../utils/scrollTo";
import logo from "../assets/logo.webp";

const navLinks = [
  { id: "how", label: "How We Work" },
  { id: "build", label: "Build" },
  { id: "team", label: "Team" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "start", label: "Contact" },
];

export default function Footer() {
  const Y = {
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
  };

  return (
    <footer 
      className="px-6 md:px-10 py-16 relative overflow-hidden"
      style={{ 
        background: "#0a0a0a",
        borderTop: "1px solid rgba(250,204,21,0.08)"
      }}
    >
      {/* Premium Yellow Glow Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #FACC15, #EAB308, #FACC15, transparent)",
            opacity: 0.5,
            boxShadow: "0 0 80px rgba(250,204,21,0.15)",
          }}
        />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(circle,rgba(250,204,21,0.06),transparent_70%)] blur-[120px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(250,204,21,0.03),transparent_70%)] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content - 4 Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-2 rounded-xl"
                style={{
                  background: "rgba(250,204,21,0.06)",
                  border: "1px solid rgba(250,204,21,0.12)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                }}
              >
                <img 
                  src={logo}
                  alt="ZenovaLab"
                  className="w-8 h-8 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(250,204,21,0.25))"
                  }}
                />
              </div>
              <span
                className="text-[24px] font-black tracking-[-0.04em] leading-none select-none"
                style={{
                  color: "#fff",
                  textShadow: `0 0 60px ${Y[400]}20`,
                }}
              >
                Zen
                <span style={{ color: Y[400] }}>ova</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "17px", fontWeight: "500" }}> Lab</span>
              </span>
            </div>
            <p 
              className="text-[14px] leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              We build premium SaaS & AI products that actually make you money. 
              From concept to deployment, we deliver excellence.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:hello.zenova.co@gmail.com"
                className="text-[14px] transition-all duration-300 hover:text-[#FACC15] hover:translate-x-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                hello.zenova.co@gmail.com
              </a>
              <span 
                className="text-[13px] flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" style={{ boxShadow: "0 0 10px #4ade80" }} />
                Available 24/7
              </span>
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Connect
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/zenovalab/", label: "LinkedIn", icon: "in" },
                { href: "https://www.instagram.com/zenovalab.it/", label: "Instagram", icon: "ig" },
                { href: "https://facebook.com/zenovalab", label: "Facebook", icon: "fb" },
                { href: "https://threads.net/@zenovalab.it", label: "Threads", icon: "th" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.02)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FACC15";
                    e.currentTarget.style.borderColor = "rgba(250,204,21,0.3)";
                    e.currentTarget.style.boxShadow = "0 8px 20px -5px rgba(250,204,21,0.15)";
                    e.currentTarget.style.background = "rgba(250,204,21,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon === "in" && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
                    {social.icon === "ig" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                    {social.icon === "fb" && <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></>}
                    {social.icon === "th" && <><path d="M12 4C8.5 4 5 6.5 5 10c0 2.5 1.5 4.5 3.5 5.5-0.5 1.5-2 3-4 3.5 1.5-0.5 3-1.5 4-2.5 1 0.5 2.5 1 4 1 3.5 0 7-2.5 7-6 0-2.5-2-5.5-5.5-5.5z"/></>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Navigation - Moved to Right */}
          <div>
            <h4 
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-1 w-fit"
                >
                  <span 
                    className="w-1 h-1 rounded-full transition-all duration-300 group-hover:bg-[#FACC15] group-hover:w-2"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />
                  <span 
                    className="text-[14px] transition-all duration-300 group-hover:text-[#FACC15]"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ 
            borderTop: "1px solid rgba(250,204,21,0.06)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Zenova Lab. All rights reserved.
          </span>
          
          <div className="flex items-center gap-4 text-xs">
            <span style={{ color: "rgba(255,255,255,0.15)" }}>
              Privacy Policy
            </span>
            <span className="w-px h-3" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span style={{ color: "rgba(255,255,255,0.15)" }}>
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}