import React from 'react'

const steps = [
  {title: 'Student', text: 'Learning fundamentals of tech and management'},
  {title: 'Intern', text: 'Practical experience in analytics and product'},
{
  title: 'Aspiring Tech-Driven Business Analyst',
  text: 'Connecting data, technology, and strategy to enable informed decision-making'
}
]

export default function Roadmap(){
  return (
    <section className="mt-12" id="roadmap">
      <h3 className="section-title text-xl font-semibold">Career Roadmap</h3>
      <div className="mt-6 relative">
        <div className="roadmap-line absolute left-0 right-0 top-8" aria-hidden="true"></div>
        <div className="flex gap-6 items-center overflow-auto py-6">
          {steps.map((s,i)=> (
            <div key={i} className="relative">
              <div className={`roadmap-node ${i===steps.length-1 ? 'pulse' : 'pulse' } absolute -top-4 left-1/2 -translate-x-1/2`} aria-hidden="true"></div>
              <div className="card-glass p-6 rounded-xl min-w-[220px]">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}