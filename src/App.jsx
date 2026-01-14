import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EducationTimeline from './components/EducationTimeline'
import Internship from './components/Internship'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Roadmap from './components/Roadmap'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useReveal from './hooks/useReveal'

export default function App(){
  useReveal('.fade-in')
  return (
    <div className="min-h-screen text-gray-100 selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main id="main" role="main" className="max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-28">
        <Hero />
        <div className="fade-in"><About /></div>
        <div className="fade-in"><EducationTimeline /></div>
        <div className="fade-in"><Internship /></div>
        <div className="fade-in"><Certifications /></div>
        <div className="fade-in"><Projects /></div>
        <div className="fade-in"><Skills /></div>
        <div className="fade-in"><Roadmap /></div>
        <div className="fade-in"><Resume /></div>
        <div className="fade-in"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}