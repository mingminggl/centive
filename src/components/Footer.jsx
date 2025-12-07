import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Centive</h3>
        <p className="muted">Self-discipline made thrilling</p>
      </div>

      <div>
        <h4>Contact</h4>
        <p className="muted">hello@centive.app</p>
      </div>

      <div>
        <h4>Legal</h4>
        <p className="muted">Terms • Privacy</p>
      </div>

      <p className="boiler">© {new Date().getFullYear()} Centive — All rights reserved.</p>
    </footer>
  );
}