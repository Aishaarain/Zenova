import React, { useCallback, useState } from "react";

import emailjs from "@emailjs/browser";

import { Mail, Linkedin, Github, Check, Copy, ArrowRight, AlertCircle } from "lucide-react";

import Eyebrow from "./ui/Eyebrow";

import Reveal from "./ui/Reveal";

import CTAButton from "./ui/CTAButton";



// Shown only in the "email us directly" fallback text.

const CONTACT_EMAIL = "hello.zanova.co@gmail.com";



// --- EmailJS config --

const EMAILJS_SERVICE_ID = "service_5jhhy3a";

const EMAILJS_TEMPLATE_ID = "template_5463lbc";

const EMAILJS_PUBLIC_KEY = "0P9pTpCTEpOt3EH6q";



export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", company: "", projectType: "Web application", budget: "Under $1,500", message: "" });

  const [submitted, setSubmitted] = useState(false);

  const [status, setStatus] = useState("idle"); // idle | sending | error

  const [copied, setCopied] = useState(false);



  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));



  const handleSubmit = useCallback(async () => {

    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");



    try {

      const templateParams = {

        name: form.name,

        email: form.email,

        company: form.company,

        projectType: form.projectType,

        budget: form.budget,

        message: form.message,

      };



      await emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        templateParams,

        { publicKey: EMAILJS_PUBLIC_KEY }

      );



      setStatus("idle");

      setSubmitted(true);

    } catch {

      setStatus("error");

    }

  }, [form]);



  const copyEmail = () => {

    navigator.clipboard?.writeText(CONTACT_EMAIL);

    setCopied(true);

    setTimeout(() => setCopied(false), 1800);

  };



  const inputStyle = { background: "var(--bg)", border: "1px solid var(--border-strong)", color: "var(--text)", fontFamily: "var(--font-body)" };

  const fieldClass = "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-faint)]";



  return (

    <section id="start" className="px-6 md:px-10 py-28 md:py-36">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        <Reveal className="md:col-span-5">

          <Eyebrow>Get in touch</Eyebrow>

          <h2 className="text-4xl md:text-5xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>

            Tell us what you're building

          </h2>

          <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

            Fill in the form and we'll reply within a day.

          </p>



          <div className="mt-10 text-xs px-4 py-3 rounded-lg inline-block" style={{ border: "1px solid var(--border)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>

            Async-first · overlapping UK/US hours · &lt;24h response

          </div>

        </Reveal>



        <Reveal delay={100} className="md:col-span-7">

          {submitted ? (

            <div className="p-10 rounded-xl flex flex-col items-start gap-4" style={{ border: "1px solid var(--border-strong)", background: "var(--bg-alt)" }}>

              <span className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--accent)" }}>

                <Check size={20} color="#0B0D12" />

              </span>

              <h3 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>

                Message sent

              </h3>

              <p className="text-sm" style={{ color: "var(--text-muted)" }}>

                Thanks for reaching out — we'll get back to you within a day. If you don't hear from us, email{" "}

                <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{CONTACT_EMAIL}</span> directly.

              </p>

              <button onClick={() => setSubmitted(false)} className="text-sm underline" style={{ color: "var(--text-muted)" }}>

                Send another message

              </button>

            </div>

          ) : (

            <div className="space-y-5">

              {status === "error" && (

                <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-lg" style={{ border: "1px solid #ef444455", background: "#ef444411", color: "#ef4444" }}>

                  <AlertCircle size={15} />

                  Something went wrong sending your message. Please try again or email us directly.

                </div>

              )}



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>

                  <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Name *</label>

                  <input className={fieldClass} style={inputStyle} value={form.name} onChange={update("name")} placeholder="Your name" />

                </div>

                <div>

                  <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Email *</label>

                  <input type="email" className={fieldClass} style={inputStyle} value={form.email} onChange={update("email")} placeholder="you@company.com" />

                </div>

              </div>



              <div>

                <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Company</label>

                <input className={fieldClass} style={inputStyle} value={form.company} onChange={update("company")} placeholder="Optional" />

              </div>



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>

                  <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Project type</label>

                  <select className={fieldClass} style={inputStyle} value={form.projectType} onChange={update("projectType")}>

                    <option>Web application</option>

                    <option>AI integration</option>

                    <option>Internal tool / dashboard</option>

                    <option>Not sure yet</option>

                  </select>

                </div>

                <div>

                  <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Budget</label>

                  <select className={fieldClass} style={inputStyle} value={form.budget} onChange={update("budget")}>

                    <option>Under $500</option>

                    <option>$200 – $500</option>

                    <option>$500 – $800</option>

                    <option>$1000+</option>

                  </select>

                </div>

              </div>



              <div>

                <label className="text-xs mb-2 block" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>What are you building? *</label>

                <textarea rows={5} className={fieldClass} style={inputStyle} value={form.message} onChange={update("message")} placeholder="Tell us about the project, timeline, and goals." />

              </div>



              <CTAButton onClick={handleSubmit} disabled={status === "sending"} className="w-full sm:w-auto">

                {status === "sending" ? "Sending…" : (

                  <>

                    Send message <ArrowRight size={16} />

                  </>

                )}

              </CTAButton>

            </div>

          )}

        </Reveal>

      </div>

    </section>

  );

}
