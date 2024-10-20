import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Campus from '../components/Campus'
import About from '../components/About'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function Homepage() {
  return (
    <div className='flex flex-col gap-4 w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Campus />
      <About />
      <Chatbot />
      <Footer />
    </div>
  )
}
