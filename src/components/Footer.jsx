export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <p className="text-xl font-black gradient-text mb-2">🗣️ SpeakFluent</p>
      <p className="text-gray-600 text-sm mb-4">
        Spoken English Mastery Course — Transform your confidence today!
      </p>
      <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        <a href="#" className="hover:text-white transition">Contact Us</a>
      </div>
      <p className="text-xs text-gray-700">© 2026 SpeakFluent. All rights reserved.</p>
    </footer>
  )
}
