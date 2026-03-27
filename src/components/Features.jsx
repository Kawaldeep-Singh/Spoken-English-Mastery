const features = [
  { icon: "🎥", title: "195+ Video Lessons", desc: "Step-by-step HD video lessons for every level — beginner to advanced" },
  { icon: "📖", title: "37 Curated Chapters", desc: "Perfectly structured chapters designed around real-life speaking needs" },
  { icon: "📕", title: "17+ eBook Materials", desc: "In-depth study material you can revise anytime, anywhere" },
  { icon: "📘", title: "25+ Spoken English E-Books", desc: "Expert e-books to practice grammar, vocabulary and fluency" },
  { icon: "✍️", title: "One Course – Unlimited Value", desc: "Lifetime access — learn completely at your own pace" },
  { icon: "⏰", title: "Productivity Bonus Course", desc: "Free Time Management Mastery video course worth ₹2,000" },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="text-center mb-10 sm:mb-14">
        <span className="glass text-blue-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
          📚 Course Content
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-3">
          Everything Inside <span className="gradient-text">One Course</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">All tools you need to become fluent — no fluff, pure value</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="glass rounded-2xl p-6 sm:p-8 card-hover cursor-default">
            <div className="text-4xl sm:text-5xl mb-4">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
