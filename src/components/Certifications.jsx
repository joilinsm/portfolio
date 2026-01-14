import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const certs = [
    {
  title: 'Cambridge English Level 1 Certificate (B2 – First)',
  issuer: 'Cambridge Assessment English',
  year: '2019',
  link: 'https://drive.google.com/file/d/1iZQK3JOrAXRs-bc7C70votANoR-Meyvd/view?usp=sharing'
},
{
  title: 'Software Engineering',
  issuer: 'NPTEL',
  year: '2023',
  link: 'https://drive.google.com/file/d/1hveA6Hd0hQqXUSuA41Udyo9rlVS6U0Og/view?usp=sharing'
},
{
  title: 'Introduction to Internet of Things',
  issuer: 'NPTEL',
  year: '2024',
  link: 'https://drive.google.com/file/d/12EzJw6_YXsjcR3ZlJrMH7pHv7uux2YV5/view?usp=sharing'
},
{
  title: 'Human Computer Interaction',
  issuer: 'NPTEL',
  year: '2025',
  link: 'https://drive.google.com/file/d/1upmpNWp9pN9lnLQQoSqE-AGz6nHu8Lud/view?usp=sharing'
}

]

export default function Certifications(){
  useEffect(()=>{
    gsap.from('.cert-card', { y: 18, opacity: 5, stagger: 0.08, duration: 0.7, ease: 'power3.out' })
  },[])

  return (
    <section id="certifications" className="mt-12">
      <h3 className="section-title text-xl font-semibold">Certifications</h3>
      <div className="mt- grid grid-cols-1 md:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <div key={i} className="cert-card card-glass p-4 rounded-xl flex flex-col" role="article" aria-label={`${c.title} certification`}>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#6EE7FF] to-[#C084FC] flex items-center justify-center font-bold text-black">{c.issuer.split(' ')[0].slice(0,2).toUpperCase()}</div>
              <div>
                <h4 className="font-semibold">{c.title}</h4>
                <div className="text-xs text-gray-400">{c.issuer} • {c.year}</div>
              </div>
            </div>
            <div className="mt-4">
              <a href={c.link} className="px-3 py-2 rounded-md text-sm bg-[#15151b]/60" target="_blank" rel="noopener noreferrer" aria-label={`View certificate ${c.title}`}>
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}