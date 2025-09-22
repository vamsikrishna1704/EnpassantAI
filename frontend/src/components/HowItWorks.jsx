import React from "react";
import useScrollReveal  from './useScrollReveal';

const steps = [
  {
    number: 1,
    title: "Analyze Position",
    desc: "The AI evaluates the board, calculating millions of possibilities in seconds.",
  },
  {
    number: 2,
    title: "Find Best Move",
    desc: "It identifies the optimal move based on deep strategic evaluation.",
  },
  {
    number: 3,
    title: "Get Insight",
    desc: "Receive a clear, human-like explanation of the move's purpose.",
  },
];

export const HowItWorks = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Effortless Analysis</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Our three-step process turns complex chess positions into simple, actionable advice.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 md:space-y-0 md:flex md:items-center md:justify-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className={`how-it-works-item scroll-reveal ${visible ? "visible" : ""}`}>
              <div className="w-16 h-16 text-3xl font-bold border-2 border-gray-700 rounded-full flex-shrink-0 flex items-center justify-center">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={`text-gray-700 mx-8 hidden md:block scroll-reveal ${visible ? "visible" : ""}`}>
                ➜
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
