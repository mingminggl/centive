import React from "react";

const faqs = [
  { q: "What if I have an emergency?", a: "We recommend contacting your recipient and pausing the bet. Policies for exceptions will be in-app and communicated during onboarding." },
  { q: "What if I don’t work in US $", a: "We support multiple currencies in the app; currency selection will be available when setting your mission." },
  { q: "Can’t my friend just not approve it to f**k with me?", a: "Find better friends" },
  { q: "Can I use this app solo?",  a: "Not currently" }
];

export default function FAQ() {
  return (
    <div className="faq">
      <h2 className="section-title">FAQs</h2>
      <div className="faq-grid">
        {faqs.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}