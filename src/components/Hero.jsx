import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import heroAnim from '../assets/hero-anim.svg'
import avatar from '../assets/PHOTO 1.jpg'

export default function Hero(){
  const titleRef = useRef()
  const avatarRef = useRef()
  useEffect(()=>{
    gsap.from(titleRef.current, {y: 30, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12})
    gsap.to(avatarRef.current, {y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut'})
  },[])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="home">
      <img src={heroAnim} aria-hidden="true" className="bg-decorative large absolute inset-0 -z-10 float-slow" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold h1-glow leading-tight">Joilin S M</h2>
          <p className="mt-2 text-lg text-gray-300">Student | Tech & Management Enthusiast</p> */}
          <p className="mt-6 max-w-xl text-gray-200">I build data-driven solutions and product ideas at the intersection of technology and strategic management — turning insights into impact.</p>

          <div className="mt-8 flex gap-4">
<a
  href="/resume.pdf"
  className="btn-neon px-5 py-3 rounded-md font-medium"
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume
</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-[#15151b]/60 hover:bg-[#15151b]/80 transition">Contact Me</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="card-glass w-80 h-80 rounded-2xl p-6 flex flex-col items-center justify-center" role="group" aria-label="Profile card">
            <div ref={avatarRef} className="w-28 h-28 rounded-full bg-gradient-to-br from-[#6EE7FF] to-[#C084FC] flex items-center justify-center overflow-hidden float-slow">
              <img src={avatar} alt="Joilin S M" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-center text-sm text-gray-200">Final Year B.Tech <br/>(Computer Science & Business Systems) <br/>Class of 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}