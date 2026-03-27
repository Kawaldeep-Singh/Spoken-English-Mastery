const testimonials = [
  {
    name: 'Kawaldeep Singh',
    city: 'Mumbai',
    emoji: '👨',
    text: '195+ videos are so well structured. I completed it in 3 weeks and feel incredibly confident now!',
  },
  {
    name: 'Shivani',
    city: 'Delhi',
    emoji: '👩',
    text: 'This course changed my life! I got promoted at work after improving my English communication skills.',
  },
  {
    name: 'Anjali Singh',
    city: 'Bangalore',
    emoji: '👩‍💼',
    text: 'The e-books are perfect for revision. Best investment I made this year — totally worth it!',
  },
];

export default function Testimonials({ link }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="text-center mb-10 sm:mb-14">
        <span className="glass text-purple-500 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
          ❤️ Student Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4">
          Real Results, <span className="gradient-text">Real Stories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 sm:p-8 card-hover"
            style={{ borderTop: '4px solid #8b5cf6' }}
          >
            <div className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 italic mb-6 leading-relaxed text-sm sm:text-base">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{t.emoji}</div>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 px-8 sm:px-12 rounded-2xl text-base sm:text-lg shadow-xl"
        >
          🎯 Join Them Now — Only ₹199
        </a>
      </div>
    </section>
  );
}
