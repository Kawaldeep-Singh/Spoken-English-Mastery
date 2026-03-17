import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Bonuses from './components/Bonuses'
import Testimonials from './components/Testimonials'
import Urgency from './components/Urgency'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Bonuses />
      <Testimonials />
      <Urgency />
      <CTA />
      <Footer />
    </div>
  )
}
