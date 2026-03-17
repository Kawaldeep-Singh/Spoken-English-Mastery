import { useState, useEffect } from 'react'

export default function Urgency() {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem('countdown')
    return saved ? parseInt(saved) : 3600
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => {
        const newVal = t > 0 ? t - 1 : 0
        localStorage.setItem('countdown', newVal)
        return newVal
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hrs = String(Math.floor(time / 3600)).padStart(2, '0')
  const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const secs = String(time % 60).padStart(2, '0')

  return (
    <section className="py-16 px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #1a0a0a, #2d0a0a)' }}>
      <p className="text-red-400 font-semibold text-sm mb-2 uppercase tracking-widest">⚠️ Offer Expires In</p>
      <div className="flex justify-center gap-4 mb-6">
        {[{ val: hrs, label: 'Hours' }, { val: mins, label: 'Minutes' }, { val: secs, label: 'Seconds' }].map((t, i) => (
          <div key={i} className="glass rounded-2xl px-6 py-4 min-w-[80px]"
            style={{ border: '1px solid rgba(239,68,68,0.3)' }}>
            <div className="text-5xl font-black text-red-400">{t.val}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t.label}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-400">
        🔥 Only <strong className="text-white">40 seats</strong> available —
        <strong className="text-red-400"> 28 already taken!</strong>
      </p>
    </section>
  )
}
