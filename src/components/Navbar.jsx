import { useState } from 'react';

export default function Navbar({ link }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🗣️</span>
          <span className="text-xl font-black gradient-text">SpeakFluent</span>
        </div>

        {/* Desktop Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block glow-btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm"
        >
          🚀 Buy Now ₹199
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden glass border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm text-center"
          >
            🚀 Buy Now ₹199
          </a>
        </div>
      )}
    </nav>
  );
}
