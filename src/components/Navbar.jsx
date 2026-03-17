export default function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50 py-4 px-8 flex justify-between items-center"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">🗣️</span>
        <span className="text-xl font-black gradient-text">SpeakFluent</span>
      </div>
      <a href="#buy"
        className="glow-btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-2 px-6 rounded-full text-sm shadow-lg">
        🚀 Enroll Now
      </a>
    </nav>
  )
}
