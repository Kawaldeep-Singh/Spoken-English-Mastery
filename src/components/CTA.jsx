export default function CTA({ link }) {
  return (
    <section
      id="buy"
      className="py-16 sm:py-24 px-4 sm:px-6 text-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="glass text-green-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
          🎓 Start Your Journey Today
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mt-6 mb-4">
          Transform Your <span className="gradient-text">English Forever</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Join hundreds of students who already changed their lives!
        </p>

        <div className="glass rounded-2xl p-6 sm:p-10 mb-8 shadow-2xl">
          <p className="text-gray-500 text-sm mb-2">
            Original Value:{' '}
            <span className="line-through font-bold text-xl text-gray-700">
              ₹9,000
            </span>
          </p>

          <div className="my-4">
            <span className="text-5xl sm:text-7xl font-black text-gray-900">
              ₹199
            </span>
            <span className="text-green-600 font-bold text-lg block mt-1">
              Only Today! 🎉
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
            <span className="glass px-3 py-1 rounded-full">✅ 195+ Videos</span>
            <span className="glass px-3 py-1 rounded-full">✅ 37 Chapters</span>
            <span className="glass px-3 py-1 rounded-full">✅ 40+ eBooks</span>
            <span className="glass px-3 py-1 rounded-full">
              ✅ Lifetime Access
            </span>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn pulse-glow block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-black py-4 sm:py-5 rounded-2xl text-base sm:text-xl shadow-2xl mb-4 text-center"
          >
            👉 Buy Now ₹199 & Get All Bonuses FREE
          </a>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-gray-500 text-xs font-medium">
            <span>🔒 100% Secure</span>
            <span>⚡ Instant Access</span>
            <span>📱 All Devices</span>
          </div>
        </div>
      </div>
    </section>
  );
}
