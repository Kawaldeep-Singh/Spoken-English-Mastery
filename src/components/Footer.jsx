export default function Footer({ link }) {
  return (
    <footer className="py-10 px-4 sm:px-6 text-center bg-white border-t border-gray-100">
      <p className="text-lg sm:text-xl font-black gradient-text mb-2">
        🗣️ SpeakFluent
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Spoken English Mastery Course — Transform your confidence today!
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-btn bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-sm shadow-lg mb-6 inline-block"
      >
        🎓 Start Learning — ₹199 Only
      </a>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 mb-4 mt-4">
        <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a>
        <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
      </div>

      <p className="text-xs text-gray-400">© 2026 SpeakFluent. All rights reserved.</p>

      {/* Made by line */}
      <p className="text-xs text-gray-400 mt-1">
        Made with ❤️ by <span className="font-semibold text-gray-500">Kawaldeep</span>
      </p>
    </footer>
  )
}
