import { useEffect, useRef, useState } from 'react'

function Counter({ target, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Hero({ link }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 bg-white overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      <div className="absolute bottom-10 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      {/* Badge */}
      <div className="glass rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-blue-600 mb-6 inline-block">
        ⚡ Limited Time Offer — Only ₹149! Only 40 Seats!
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 float-anim">
        Speak English <br />
        <span className="gradient-text">Like a Pro</span>
      </h1>

      <p className="text-gray-600 text-base sm:text-xl md:text-2xl max-w-2xl mb-10 px-2">
        India's #1 Spoken English course with{' '}
        <strong className="text-gray-900">195+ Video Lessons</strong>, 37 Chapters &{' '}
        <strong className="text-green-600">₹9,000 worth FREE Bonuses!</strong>
      </p>

      {/* CTA Button */}
      <a href={link} target="_blank" rel="noopener noreferrer"
        className="glow-btn pulse-glow bg-gradient-to-r from-green-500 to-blue-600 text-white font-black py-4 sm:py-5 px-8 sm:px-14 rounded-2xl text-lg sm:text-xl shadow-2xl mb-4">
        🎓 Get Course for ₹149 Only →
      </a>

      <p className="text-gray-500 text-xs sm:text-sm">
        🔒 Secure Payment &nbsp;•&nbsp; Instant Access &nbsp;•&nbsp; Lifetime Validity
      </p>

      {/* Animated Stats */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-10 mt-12 w-full max-w-lg sm:max-w-none">
        {[
          { target: 195, suffix: '+', label: 'Video Lessons' },
          { target: 37,  suffix: '',  label: 'Chapters' },
          { target: 40,  suffix: '+', label: 'eBooks' },
          { target: 149, prefix: '₹', label: 'Only Today!' },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl font-black gradient-text">
              <Counter target={s.target} prefix={s.prefix || ''} suffix={s.suffix || ''} />
            </div>
            <div className="text-gray-600 text-xs sm:text-sm mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}
