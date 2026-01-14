import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import aiBg from '../assets/project-bg-ai.svg'
import artisanBg from '../assets/project-bg-artisan.svg'
import sparkles from '../assets/tech-sparkles.svg'

const projects = [
  {
    title: 'Face Recognition Attendance System',
    desc: 'Attendance system that marks attendance using face recognition. Built using AI-assisted tools and automation for real-world applicability.',
    stack: ['Python', 'OpenCV', 'ML', 'Flask', 'Deployment'],
    link: 'https://github.com/joilinsm/FACE-RECOGNITION-ATTENDENCE',
    bg: aiBg
  },
  {
    title: 'Artisan Commerce Platform',
    desc: 'Digital commerce platform for artisan products to preserve tradition and eliminate intermediaries. Focused on market access and sustainable growth.',
    stack: ['React', 'Node.js', 'Stripe', 'Analytics'],
    link: '#',
    bg: artisanBg
  },
  {
    title: 'Smart Supermarket Management System',
    desc: 'A supermarket application built using Firebase for real-time inventory, billing, and order management. Designed to optimize stock control, sales tracking, and customer experience.',
    stack: ['React', 'Firebase', 'Firestore', 'Authentication', 'Analytics'],
    link: 'https://github.com/joilinsm/SUPERMARKET-APP',
    bg: aiBg
  }

]

export default function Projects(){
  const refs = useRef([])

  useEffect(()=>{
    const elRefs = refs.current
    elRefs.forEach((el) => {
      if(!el) return
      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(el, { rotationX: -y * 6, rotationY: x * 8, transformPerspective: 800, duration: 0.4, ease: 'power2.out' })
        gsap.to(el.querySelector('.card-layer'), { xPercent: x * 8, yPercent: y * 8, duration: 0.6, ease: 'power2.out' })
      }
      const onLeave = () => {
        gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.6, ease:'power3.out' })
        gsap.to(el.querySelector('.card-layer'), { xPercent: 0, yPercent: 0, duration: 0.6, ease:'power2.out' })
      }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      el.addEventListener('blur', onLeave)
    })

    return ()=>{
      refs.current.forEach((el) => {
        if(!el) return
        el.removeEventListener('mousemove', ()=>{})
        el.removeEventListener('mouseleave', ()=>{})
      })
    }
  }, [])

  return (
    <section className="mt-12" id="projects">
      <h3 className="section-title text-xl font-semibold">Projects</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i)=> (
          <article key={i} ref={el => refs.current[i] = el} tabIndex={0} role="article" aria-label={`${p.title} project`} className="project-card card-glass p-5 rounded-xl transform transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#6EE7FF]/30">
            <div className="card-layer parallax" style={{backgroundImage:`url(${p.bg})`}} aria-hidden="true"></div>
            <img src={sparkles} alt="" className="bg-decorative" aria-hidden="true" />
            <div className="neon-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{p.title}</h4>
                <div className="text-xs text-gray-400">Highlight: {i===0? 'AI-assisted development' : 'Market expansion' }</div>
              </div>
              <p className="text-sm text-gray-300 mt-3">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t, idx)=> (
                  <span key={idx} className="text-xs px-2 py-1 rounded bg-[#0b1220] border border-gray-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.link} className="px-3 py-2 rounded-md text-sm bg-[#15151b]/60" aria-label={`View details for ${p.title}`} target="_blank" rel="noopener noreferrer">View Details</a>
                <a href={p.link} className="px-3 py-2 rounded-md text-sm border border-gray-700" aria-label={`View concept for ${p.title}`} target="_blank" rel="noopener noreferrer">View Concept</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}