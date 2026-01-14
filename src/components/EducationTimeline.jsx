import React from 'react'

const items = [
  {year: '2026 (Expected)', title: 'B.Tech in Computer Science & Business Systems', org: 'R.M.K Engineering College', details: 'Final Year — Focus: Data, AI, and Product Strategy'},
  {year: '2022', title: '72.00', org: 'KINGS SCHOOL CBSE', details: '(Higher Secondary Education — Computer Science stream)'},
  {year: '2020', title: '90.80', org: 'Sacred Heart Internation School, ICSE', details: '(Secondary Education)'}
]

export default function EducationTimeline(){
  return (
    <section className="mt-12" id="education">
      <h3 className="section-title text-xl font-semibold">Education</h3>
      <div className="mt-6 space-y-6">
        {items.map((it, idx)=> (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center text-sm font-medium border border-gray-700">{idx+1}</div>
            <div>
              <div className="flex items-center gap-4">
                <h4 className="font-semibold">{it.title}</h4>
                <span className="text-xs text-gray-400">{it.year}</span>
              </div>
              <p className="text-sm text-gray-300">{it.org} — {it.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}