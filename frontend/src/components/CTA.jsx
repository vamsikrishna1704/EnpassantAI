import { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

function CTA({ onPreBook }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [ref, visible] = useScrollReveal();

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 2000);
    }
  };

  return (
    <section className="section text-center" ref={ref}>
      <div className={`bg-gray-900 border border-gray-800 rounded-3xl p-12 scroll-reveal ${visible ? "visible" :  ""}`}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Be The First to Know</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Pre-book Enpassant AI today for a 50% launch discount, or subscribe for updates.
        </p>
        <div className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPreBook}
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Pre-Book & Save 50%
          </button>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-gray-600"
          >
            {subscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;