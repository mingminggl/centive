import React, { useState } from "react";

export default function Join() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyp5GwsubHWcbzSyKjhddziuBRTSZ10AG_WzZs_1Z77ImbwGIjUuZsyeMReK9XK08BaVw/exec';
      
      const formData = new FormData();
      formData.append('email', email);
      formData.append('source', 'join');
      formData.append('timestamp', new Date().toISOString());
      
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      
      setSent(true);
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      // Still show success to user even if submission fails
      setSent(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="join">
      <h2 className="section-title">Join first access</h2>
      <p className="muted">Be the first to try Centive — exclusive access for early members.</p>

      <form className="join-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="yourbest@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="cta-strong">Get first access</button>
      </form>

      {sent && <p className="success">You're on the early access list. Check your inbox soon.</p>}
    </div>
  );
}