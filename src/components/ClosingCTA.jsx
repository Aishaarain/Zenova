// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Eyebrow from "./ui/Eyebrow";
// import CTAButton from "./ui/CTAButton";
// import { useReveal } from "../hooks/useReveal";
// import { scrollToId } from "../utils/scrollTo";

// export default function ClosingCTA() {
//   const [ref, visible] = useReveal(0.3);
//   return (
//     <section ref={ref} className="relative px-6 md:px-10 py-28 md:py-40 text-center overflow-hidden" style={{ background: "var(--bg-alt)" }}>
//       <div
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-1/2 w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
//         style={{ background: "radial-gradient(circle at center, rgba(255,180,84,0.14), transparent 65%)" }}
//       />
//       <div
//         className="relative max-w-3xl mx-auto"
//         style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.96)", transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(.16,1,.3,1)" }}
//       >
//         <Eyebrow>Step into Zenova</Eyebrow>
//         <h2 className="text-4xl md:text-6xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
//           Ready to ship the thing you've been putting off?
//         </h2>
//         <p className="mt-6 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
//           send a message and we'll scope it together.
//         </p>
//         <div className="mt-10">
//           <CTAButton onClick={() => scrollToId("start")}>
//             Start Your Project <ArrowRight size={16} />
//           </CTAButton>
//         </div>
//       </div>
//     </section>
//   );
// }
