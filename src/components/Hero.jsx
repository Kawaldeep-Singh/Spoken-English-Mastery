export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #667eea, transparent)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f093fb, transparent)' }} />

      {/* Badge */}
      <div className="glass rounded-full px-5 py-2 text-sm font-semibold text-purple-300 mb-6 inline-block">
        ⚡ Limited Time Offer — Only 40 Seats Left!
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 float-anim">
        Speak English with <br />
        <span className="gradient-text">True Confidence</span>
      </h1>

      <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-10">
        India's most complete Spoken English course with <strong className="text-white">195+ Video Lessons</strong>,
        37 Chapters & Exclusive Bonuses worth <strong className="text-yellow-400">₹9,000 FREE!</strong>
      </p>

      {/* CTA Button */}
      <a href="#buy"
        className="glow-btn pulse-glow bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-5 px-14 rounded-full text-xl shadow-2xl mb-4">
        🎓 Get Instant Access Now →
      </a>

      <p className="text-gray-500 text-sm">🔒 Secure Payment &nbsp;•&nbsp; Instant Access &nbsp;•&nbsp; Lifetime Validity</p>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-8 mt-14">
        {[
          { num: "195+", label: "Video Lessons" },
          { num: "37", label: "Chapters" },
          { num: "40+", label: "E-Books" },
          { num: "40", label: "Seats Only" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-black gradient-text">{s.num}</div>
            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
