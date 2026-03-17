const testimonials = [
  { name: "Priya Sharma", city: "Delhi", emoji: "👩", text: "This course changed my life! I got promoted at work after improving my English communication skills." },
  { name: "Rahul Verma", city: "Mumbai", emoji: "👨", text: "195+ videos are so well structured. I completed it in 3 weeks and feel incredibly confident now!" },
  { name: "Anjali Singh", city: "Bangalore", emoji: "👩‍💼", text: "The e-books are perfect for revision. Best investment I made this year — totally worth it!" },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
      <div className="text-center mb-14">
        <span className="glass text-pink-400 text-sm font-semibold px-4 py-2 rounded-full">
          ❤️ Student Reviews
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4">
          Real Results, <span className="gradient-text">Real Stories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="glass rounded-2xl p-7 card-hover"
            style={{ borderTop: '3px solid', borderImage: 'linear-gradient(135deg, #667eea, #f093fb) 1' }}>
            <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{t.emoji}</div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-gray-500">{t.city}</p>
              </div>
              <div className="ml-auto text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
