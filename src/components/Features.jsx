const features = [
  { icon: "🎥", title: "195+ Video Lessons", desc: "Step-by-step HD video lessons for every level — beginner to advanced" },
  { icon: "📖", title: "37 Curated Chapters", desc: "Perfectly structured chapters designed around real-life speaking needs" },
  { icon: "📕", title: "17+ eBook Materials", desc: "In-depth study material you can revise anytime, anywhere" },
  { icon: "📘", title: "25+ Spoken English E-Books", desc: "Expert e-books to practice grammar, vocabulary and fluency" },
  { icon: "✍️", title: "Unlimited Value", desc: "One course, lifetime access — learn completely at your own pace" },
  { icon: "⏰", title: "Productivity Bonus Course", desc: "Free Time Management Mastery video course worth ₹2,000" },
]

export default function Features() {
  return (
    <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
      <div className="text-center mb-14">
        <span className="glass text-purple-400 text-sm font-semibold px-4 py-2 rounded-full">
          📚 Course Content
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3">
          Everything Inside <span className="gradient-text">One Course</span>
        </h2>
        <p className="text-gray-500 text-lg">All tools you need to become fluent — no fluff, pure value</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="glass rounded-2xl p-7 card-hover cursor-default">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
