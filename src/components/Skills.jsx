import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const tech = ['Python', 'Excel', 'Power BI', 'SQL', 'Pandas', 'OpenCV']
const manager = [
  { name: 'Problem Sloving', pct: 60 },
  { name: 'Data-driven Decisions', pct: 77 },
  { name: 'Roadmapping', pct: 55 },
  { name: 'Communication', pct: 75 }
]

export default function Skills(){
  const barsRef = useRef([])

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const bar = entry.target.querySelector('.fill')
          gsap.to(bar, { width: bar.getAttribute('data-width'), duration: 1.2, ease: 'power2.out' })
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    barsRef.current.forEach(b => { if(b) obs.observe(b) })
    return ()=> obs.disconnect()
  }, [])

  return (
    <section className="mt-12" id="skills">
      <h3 className="section-title text-xl font-semibold">Skills</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-glass p-5 rounded-xl">
          <h4 className="font-semibold">Technical Skills</h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {tech.map((t,i)=> (
              <div key={i} className="px-3 py-1 rounded bg-[#071127] border border-gray-700 text-sm">{t}</div>
            ))}
          </div>
        </div>
        <div className="card-glass p-5 rounded-xl">
          <h4 className="font-semibold">Managerial & Analytical</h4>
          <div className="mt-3 flex flex-col gap-3">
            {manager.map((m,i)=> (
              <div className="w-full" key={i} ref={el => barsRef.current[i] = el}>
                <div className="flex justify-between text-sm text-gray-300"><span>{m.name}</span><span>{m.pct}%</span></div>
                <div className="w-full h-2 rounded bg-gray-800 mt-2 overflow-hidden" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={m.pct} aria-label={`${m.name} skill level`}>
                  <div className="h-full fill bg-gradient-to-r from-[#6EE7FF] to-[#C084FC]" data-width={`${m.pct}%`} style={{width: '0%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}