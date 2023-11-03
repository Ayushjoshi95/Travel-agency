import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import Destinations from './Components/Destinations'
import Offer from './Components/Offer'
import ScrollToTop from './Components/ScrollToTop'
import Tours from './Components/Tours'
import Testimonial from './Components/Testimonial'
import DownloadApp from './Components/DownloadApp'
import Footer from './Components/Footer'




export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </div>
  )
}
