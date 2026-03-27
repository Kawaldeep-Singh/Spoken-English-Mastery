import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Bonuses from './components/Bonuses'
import Testimonials from './components/Testimonials'
import Urgency from './components/Urgency'
import CTA from './components/CTA'
import Footer from './components/Footer'

const LINK = "https://share.google/ee0gYV1FVvOt7JFYo"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar link={LINK} />
      <Hero link={LINK} />
      <Features />
      <Bonuses link={LINK} />
      <Testimonials link={LINK} />
      <Urgency link={LINK} />
      <CTA link={LINK} />
      <Footer link={LINK} />

      {/* Floating Button */}
      {/* Floating CTA Button */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

  {/* Tooltip */}
  <div className="glass text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg animate-bounce">
    🔥 Only ₹199 Left!
  </div>

  {/* Main Button */}
  <a
    href={LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="glow-btn pulse-glow bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl flex items-center gap-2 px-5 py-3 font-black text-sm"
    style={{ boxShadow: '0 8px 32px rgba(34,197,94,0.5)' }}
  >
    <span className="text-xl">🎓</span>
    <span>Buy Now ₹199</span>
  </a>

</div>
    </div>
  )
}
