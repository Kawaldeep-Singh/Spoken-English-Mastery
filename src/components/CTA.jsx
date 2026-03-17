export default function CTA() {
  return (
    <section id="buy" className="py-24 px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>

      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #667eea 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="glass text-green-400 text-sm font-semibold px-4 py-2 rounded-full">
          🎓 Start Your Journey Today
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4">
          Transform Your <span className="gradient-text">English Forever</span>
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Join hundreds of students who already changed their lives with SpeakFluent
        </p>

        <div className="glass rounded-2xl p-8 mb-8"
          style={{ border: '1px solid rgba(102,126,234,0.3)' }}>
          <p className="text-gray-400 text-sm mb-1">Total Value: <span className="line-through">₹9,000</span></p>
          <p className="text-5xl font-black text-white mb-1">
            Today's Price 🎉
          </p>
          <p className="text-yellow-400 text-sm mb-6">✅ All bonuses included • ✅ Lifetime access</p>

          <a href="#"
            className="glow-btn pulse-glow block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-5 rounded-2xl text-xl shadow-2xl mb-4">
            👉 Buy Now & Get All Bonuses FREE
          </a>

          <div className="flex justify-center gap-6 text-gray-500 text-xs">
            <span>🔒 Secure Payment</span>
            <span>⚡ Instant Access</span>
            <span>📱 Mobile Friendly</span>
          </div>
        </div>
      </div>
    </section>
  )
}
