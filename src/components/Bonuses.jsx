const bonuses = [
  { icon: "📚", text: "Full Spoken English Course", value: "₹3,000" },
  { icon: "🎥", text: "195+ Video Lessons", value: "₹2,000" },
  { icon: "📖", text: "37 Perfectly Curated Chapters", value: "₹500" },
  { icon: "📕", text: "17+ Ebook Study Materials", value: "₹1,000" },
  { icon: "📘", text: "25+ Spoken English E-Books", value: "₹1,000" },
  { icon: "⏰", text: "Productivity & Time Management Course", value: "₹1,500" },
]

export default function Bonuses({ link }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center mb-10 sm:mb-14">
        <span className="glass text-green-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
          🎁 Free Bonuses
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-3">
          Bonuses Worth <span className="text-green-500">₹9,000</span> — FREE!
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">Get everything for just <strong>₹149</strong></p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {bonuses.map((b, i) => (
          <div key={i} className="glass rounded-xl px-4 sm:px-6 py-4 flex items-center justify-between card-hover gap-2">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <span className="text-2xl sm:text-3xl">{b.icon}</span>
              <span className="font-semibold text-gray-900 text-sm sm:text-base">{b.text}</span>
            </div>
            <span className="text-green-500 font-bold text-xs sm:text-sm bg-green-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              FREE <span className="line-through text-gray-400 ml-1">{b.value}</span>
            </span>
          </div>
        ))}

        {/* Total Row */}
        <div className="glass rounded-xl px-4 sm:px-6 py-4 flex items-center justify-between"
          style={{ border: '2px solid rgba(34, 197, 94, 0.4)' }}>
          <span className="text-gray-900 font-black text-base sm:text-lg">💰 Total Value</span>
          <span className="text-green-600 font-black text-lg sm:text-xl">₹9,000 FREE!</span>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a href={link} target="_blank" rel="noopener noreferrer"
            className="glow-btn bg-gradient-to-r from-green-500 to-blue-600 text-white font-black py-4 px-8 sm:px-12 rounded-2xl text-base sm:text-lg shadow-xl">
            🎁 Claim All Bonuses for ₹149
          </a>
        </div>
      </div>
    </section>
  )
}
