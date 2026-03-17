const bonuses = [
  { icon: "📚", text: "Full Spoken English Course", value: "₹3,000" },
  { icon: "🎥", text: "195+ Video Lessons", value: "₹2,000" },
  { icon: "📖", text: "37 Perfectly Curated Chapters", value: "₹500" },
  { icon: "📕", text: "17+ Ebook Study Materials", value: "₹1,000" },
  { icon: "📘", text: "25+ Spoken English E-Books", value: "₹1,000" },
  { icon: "⏰", text: "Productivity & Time Management Course", value: "₹1,500" },
]

export default function Bonuses() {
  return (
    <section className="py-24 px-6" style={{ background: '#111' }}>
      <div className="text-center mb-14">
        <span className="glass text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full">
          🎁 Free Bonuses
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3">
          Bonuses Worth <span className="text-yellow-400">₹9,000</span> — Yours FREE
        </h2>
        <p className="text-gray-500 text-lg">Buy today and unlock all bonuses instantly</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {bonuses.map((b, i) => (
          <div key={i} className="glass rounded-xl px-6 py-4 flex items-center justify-between card-hover">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{b.icon}</span>
              <span className="text-white font-semibold">{b.text}</span>
            </div>
            <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">
              FREE <span className="line-through text-gray-500 ml-1">{b.value}</span>
            </span>
          </div>
        ))}

        {/* Total */}
        <div className="rounded-xl px-6 py-4 flex items-center justify-between mt-2"
          style={{ background: 'linear-gradient(135deg, rgba(102,126,234,0.2), rgba(240,147,251,0.2))', border: '1px solid rgba(102,126,234,0.4)' }}>
          <span className="text-white font-black text-lg">💰 Total Value</span>
          <span className="text-yellow-400 font-black text-xl">₹9,000 — FREE!</span>
        </div>
      </div>
    </section>
  )
}
