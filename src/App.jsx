import React from "react";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Build from "./components/Build";
// import Process from "./components/Process";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
// import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <HowWeWork />
      <Build />
      {/* <Process /> */}
      <About />
      <Pricing />
      <Testimonials/>
      <Contact />
      {/* <ClosingCTA /> */}
      <Footer />
    </div>
  );
}
