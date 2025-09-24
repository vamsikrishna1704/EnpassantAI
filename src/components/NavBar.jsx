function NavBar({ onPreBook }) {
    return (
        <nav className="nav">
            <div className="logo">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 45 45">
                <path d="M22.5,11.5 C19.19,11.5 16.5,14.19 16.5,17.5 C16.5,20.81 19.19,23.5 22.5,23.5 C25.81,23.5 28.5,20.81 28.5,17.5 C28.5,14.19 25.81,11.5 22.5,11.5 Z M15,36.5 L30,36.5 L22.5,23.5 L15,36.5 Z"/>
            </svg>
            </div>
            <button
            onClick={onPreBook}
            className="bg-transparent border border-gray-600 text-white font-semibold py-2 px-6 rounded-full transition-colors hover:bg-white hover:text-black"
            >
            Pre-Book Now
            </button>
        </nav>
    );
}

export default NavBar;