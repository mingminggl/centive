import React from "react";

const steps = [
  {
    title: "Set your mission",
    desc: "Choose what you'll do, when you'll do it, how much $$ you'll put on the line, and your lucky friend recipient.",
    img: "images/set.jpg"
  },
  {
    title: "Prove it",
    desc: "Take a picture to show you kept your word. Your recipient will verify it.",
    img: "images/proof.jpg"
  },
  {
    title: "Win or literally pay the price",
    desc: "Either you succeed and celebrate, or you pay up and learn.",
    img: "images/list.jpg"
  },
  {
    title: "See how your friends do",
    desc: "Track progress and friendly competition in one place.",
    img: "images/proof.jpg"
  }
];

export default function HowItWorks() {
  return (
    <div className="how">
      <h2 className="section-title">How it works</h2>
      <div className="steps">
        {steps.map((s, i) => (
          <div className="step" key={i}>
            <img src={s.img} alt={s.title} className="step-img" />
            <div className="step-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
