function Hero({ onPreBook }) {
    return (
        <header className="hero-section">
            <div className="hero-content">
            <h1 className="hero-title">
                <span className="block">Intelligence in</span>
                <span className="block text-gray-400">Motion.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                Introducing Enpassant AI, the revolutionary training tool that reveals the hidden logic behind every grandmaster move.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
                <button
                onClick={onPreBook}
                className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
                >
                Pre-Book Now
                </button>
                <a
                href="#features"
                className="bg-transparent border border-gray-600 text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-gray-900"
                >
                Learn More
                </a>
            </div>
            </div>
            <div className="scroll-indicator">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            </div>
        </header>
    );
}

export default Hero;