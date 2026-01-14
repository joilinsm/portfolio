import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Joilin S M — Student | Tech & Management Enthusiast</div>
        <div className="flex items-center gap-4 text-gray-300">
          <a href="https://www.linkedin.com/in/joilinsm/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/joilinsm" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:joilinsm@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  )
}