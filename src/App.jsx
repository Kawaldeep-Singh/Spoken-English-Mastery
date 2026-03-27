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

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/919876543210?text=Hi! I want to buy the SpeakFluent course for ₹149"
          target="_blank" rel="noopener noreferrer"
          className="glow-btn bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl">
          💬
        </a>
      </div>
    </div>
  )
}
