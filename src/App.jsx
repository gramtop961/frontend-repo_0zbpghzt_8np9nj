import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Tracking from './components/Tracking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Tracking />
      <Footer />
    </div>
  )
}

export default App
