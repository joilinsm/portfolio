import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  function validate(){
    if(!form.name || !form.email || !form.message) return false
    // basic email check
    const re = /\S+@\S+\.\S+/;
    return re.test(form.email)
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!validate()){ setStatus({type:'error', msg:'Please enter valid details.'}); return }
    setStatus({type:'pending', msg:'Sending...'})
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(data.success){
        setStatus({type:'success', msg:'Message sent — I will respond shortly.'})
        setForm({name:'', email:'', message:''})
      } else {
        setStatus({type:'error', msg: data.message || 'Failed to send'})
      }
    }catch(err){
      setStatus({type:'error', msg: 'Network error — try again locally.'})
    }
  }

  return (
    <section className="mt-12" id="contact">
      <h3 className="section-title text-xl font-semibold">Contact</h3>
      <div className="mt-6 card-glass p-6 rounded-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" aria-label="Name" required className="p-3 bg-transparent border border-gray-700 rounded focus-ring" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" aria-label="Email" required type="email" className="p-3 bg-transparent border border-gray-700 rounded focus-ring" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" aria-label="Message" required className="p-3 bg-transparent border border-gray-700 rounded md:col-span-2 focus-ring" rows={5} placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})}></textarea>

          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" aria-label="Send message" className="px-5 py-2 rounded btn-neon focus-ring">Send Message</button>
            <div role="status" aria-live="polite">{status && <div className={`${status.type==='error'?'text-red-400':'text-green-300'} text-sm`}>{status.msg}</div>}</div>
          </div>
        </form>
      </div>
    </section>
  )
}