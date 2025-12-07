import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="how" className="container">
          <HowItWorks />
        </section>

        <section id="faqs" className="container">
          <FAQ />
        </section>

        <section id="join" className="container">
          <Join />
        </section>

        <section id="contact" className="container">
          <Footer />
        </section>
      </main>
    </div>
  );
}