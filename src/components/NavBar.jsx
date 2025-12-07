import React from "react";

export default function NavBar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">
          <div className="logo-mark" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="6" fill="var(--purple)" />
              <path d="M7 12h10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="brand-name">Centive</span>
        </div>

        <a
          className="ig-link"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Centive on Instagram"
          title="Instagram"
        >
          {/* simple Instagram icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="white" />
          </svg>
        </a>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#how" onClick={scrollTo("how")} className="link">How it works</a>
        <a href="#faqs" onClick={scrollTo("faqs")} className="link">FAQs</a>
        <a href="#contact" onClick={scrollTo("contact")} className="link">Contact</a>

        <a href="#join" onClick={scrollTo("join")} className="btn-join" aria-current="page">
          <strong>Join Now</strong>
        </a>
      </nav>
    </header>
  );
}