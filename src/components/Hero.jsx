import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyp5GwsubHWcbzSyKjhddziuBRTSZ10AG_WzZs_1Z77ImbwGIjUuZsyeMReK9XK08BaVw/exec';
      
      const formData = new FormData();
      formData.append('email', email);
      formData.append('source', 'hero');
      formData.append('timestamp', new Date().toISOString());
      
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      // Still show success to user even if submission fails
      setSubmitted(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero container">
      <div className="hero-left">
        <h1 className="hero-title">Self-discipline made thrilling</h1>
        <p className="hero-sub">The habit app that makes inconsistency costly and friends full.</p>

        <form className="waitlist" onSubmit={onSubmit} aria-label="Join waitlist">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="cta">Join Centive</button>
        </form>

        {submitted && <p className="success">Thanks — you’re on the waitlist. We'll email soon.</p>}
      </div>

      <div className="hero-right">
        {/* Placeholder image for app UI; replace with real screenshot */}
        <img
          src="images/list.jpg"
          alt="App UI preview"
          className="hero-image"
        />
      </div>
    </div>
  );
}