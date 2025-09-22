import { useScrollReveal } from "./useScrollReveal";

function Features() {

    const [ref, visible] = useScrollReveal();

    return (
        <section id="features" className="section" ref={ref}>
            <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tighter scroll-reveal ${visible ? "visible" : ""}`}>See the Board Differently</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto scroll-reveal">
                Enpassant AI goes beyond simple analysis. It teaches you to understand the deep strategic principles of chess.
            </p>
            </div>
            <div className="feature-grid">
            {[
                {
                title: "Instant Insights",
                desc: "Get plain-english explanations for any position. Understand why a move is strong, what threats it creates, and the long-term plan it serves.",
                icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                },
                {
                title: "Personalized Training",
                desc: "Our AI adapts to your play style, identifying your weaknesses and generating puzzles and lessons to help you improve faster.",
                icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                ),
                },
                {
                title: "Pattern Recognition",
                desc: "Learn to spot key tactical and strategic patterns with AI-guided commentary on millions of grandmaster games.",
                icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                ),
                },
            ].map((f, i) => (
                <div key={i} className={`feature-card scroll-reveal ${visible ? "visible" : ""}`}>
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {f.icon}
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
                </div>
            ))}
            </div>
        </section>
    );
}

export default Features;