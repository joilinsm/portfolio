import { useEffect } from 'react'

export default function useReveal(selector = '.fade-in'){
  useEffect(()=>{
    const items = document.querySelectorAll(selector)
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    items.forEach(i => obs.observe(i))

    return ()=> obs.disconnect()
  }, [selector])
}