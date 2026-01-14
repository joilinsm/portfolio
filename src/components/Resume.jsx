import React from 'react'

export default function Resume(){
  return (
    <section className="mt-12" id="resume">
      <h3 className="section-title text-xl font-semibold">Resume</h3>
      <div className="mt-6 card-glass p-6 rounded-xl flex items-center justify-between">
        <div>
          <h4 className="font-semibold">Download my resume</h4>
          <p className="text-sm text-gray-300">A summary of education, internships, projects, and relevant skills prepared for recruiters.</p>
        </div>
        <a href="/resume.pdf" download className="btn-neon px-4 py-2 rounded-md">Download PDF</a>
      </div>
    </section>
  )
}