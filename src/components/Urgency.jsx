import { useState, useEffect } from 'react'

export default function Urgency({ link }) {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem('countdown_v2')
    return saved ? parseInt(saved) : 7200
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => {
        const newVal = t > 0 ? t - 1 : 0
        localStorage.setItem('countdown_v2', newVal)
        return newVal
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hrs = String(Math.floor(time / 3600)).padStart(2, '0')
  const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const secs = String(time % 60).padStart(2, '0')

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 text-center bg-gradient-to-r from-red-50 to-orange-50">
      <p className="text-red-500 font-bold text-xs sm:text-sm mb-4 uppercase tracking-widest">
        ⚠️ Limited Time Offer — Hurry Up!
      </p>

      {/* Timer */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-6">
        {[{ val: hrs, label: 'Hours' }, { val: mins, label: 'Minutes' }, { val: secs, label: 'Seconds' }].map((t, i) => (
          <div key={i} className="glass rounded-2xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px]"
            style={{ border: '2px solid rgba(239,68,68,0.3)' }}>
            <div className="text-3xl sm:text-5xl font-black text-red-500">{t.val}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t.label}</div>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-sm sm:text-base mb-6">
        🔥 Only <strong className="text-red-600">40 seats</strong> available —{' '}
        <strong className="text-red-500">28 already taken! Only 12 left!</strong>
      </p>

      <a href={link} target="_blank" rel="noopener noreferrer"
        className="glow-btn bg-gradient-to-r from-red-500 to-orange-500 text-white font-black py-4 px-8 sm:px-12 rounded-2xl text-base sm:text-lg shadow-xl">
        🔥 Secure My Seat — ₹149 Only
      </a>
    </section>
  )
}
