import React from "react";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackBar from "./components/StackBar";
import Capabilities from "./components/Capabilities";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <StackBar />
      <Capabilities />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
