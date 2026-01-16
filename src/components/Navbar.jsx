import React, { useState, useRef, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { gsap } from 'gsap'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(()=>{
    if(!panelRef.current) return
    if(open){
      gsap.fromTo(panelRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.45, ease: 'power3.out' })
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(panelRef.current, { xPercent: 100, duration: 0.36, ease: 'power2.in' })
      document.body.style.overflow = ''
    }
    return ()=>{ document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-3 card-glass backdrop-blur-sm border-b border-gray-800">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] text-black font-bold">JSM</div>
            <div>
              <h1 className="text-xl text-gray-400 font-semibold">Joilin S M</h1>
              <p className="text-xs text-gray-400">Student | Tech & Management Enthusiast</p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn-neon px-4 py-2 rounded-md text-sm">Contact</a>
            <a href="/resume.pdf" className="btn-neon px-5 py-3 rounded-md font-medium" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href="mailto:joilinsm@gmail.com" aria-label="Email" className="p-2 text-gray-300 hover:text-white"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/joilinsm/" aria-label="LinkedIn" className="p-2 text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/joilinsm" aria-label="GitHub" className="p-2 text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>

          {/* Mobile menu button */}
          <button aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)} className="md:hidden p-2 rounded focus-ring">
            <FaBars className="text-gray-300" />
            <span className="sr-only">Open menu</span>
          </button>
        </nav>
      </div>

      {/* Mobile sliding panel */}
      <div id="mobile-menu" aria-hidden={!open} className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={()=>setOpen(false)} aria-hidden="true"></div>
        <aside ref={panelRef} className="absolute right-0 top-0 h-full w-72 bg-[#06060a]/90 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#6EE7FF] to-[#C084FC] text-black font-bold">JS</div>
              <div>
                <h2 className="text-lg font-semibold">Joilin S M</h2>
                <p className="text-xs text-gray-400">Student | Tech & Management Enthusiast</p>
              </div>
            </div>
            <button aria-label="Close menu" className="p-2 rounded focus-ring" onClick={()=>setOpen(false)}>
              <FaTimes className="text-gray-300" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-3" aria-label="Mobile Navigation">
            <a href="#home" onClick={()=>setOpen(false)} className="py-2 px-3 rounded btn-neon">Home</a>
            <a href="#about" onClick={()=>setOpen(false)} className="py-2 px-3 rounded btn-neon">About</a>
            <a href="#projects" onClick={()=>setOpen(false)} className="py-2 px-3 rounded btn-neon">Projects</a>
            <a href="#contact" onClick={()=>setOpen(false)} className="py-2 px-3 rounded btn-neon">Contact</a>
            <a href="/resume.pdf" onClick={()=>setOpen(false)} className="py-2 px-3 rounded btn-neon" target="_blank" rel="noopener noreferrer">Resume</a>
            <div className="flex items-center gap-3 pt-4">
              <a href="https://www.linkedin.com/in/joilinsm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-gray-300 hover:text-white"><FaLinkedin /></a>
              <a href="https://github.com/joilinsm" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-gray-300 hover:text-white"><FaGithub /></a>
              <a href="mailto:joilinsm@gmail.com" aria-label="Email" className="p-2 text-gray-300 hover:text-white"><FaEnvelope /></a>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  )
}