import React from 'react'

export default function Internship(){
  return (
    <section className="mt-12" id="internship">
      <h3 className="section-title text-xl font-semibold">Internship</h3>
      <div className="mt-6 card-glass p-6 rounded-xl">
        <h4 className="font-semibold">Data Analytics Intern</h4>
        <p className="text-sm text-gray-300 mt-2 text-justify leading-relaxed">Contributed as a Data Analytics Intern focusing on cleaning and preparing datasets, conducting exploratory and inferential analyses, producing clear visualizations, and delivering actionable insights to stakeholders. Worked with tools such as Excel, Power BI, and Python (pandas, matplotlib) to automate reporting pipelines and build dashboards that informed  decisions.</p>
        <ul className="mt-3 list-disc ml-5 text-sm text-gray-300">
          <li>Data cleaning and ETL preparation</li>
          <li>Dashboards and visualization to support product hypotheses</li>
          <li>Presented insights to cross-functional teams with recommended actions</li>
        </ul>
      </div>
    </section>
  )
}