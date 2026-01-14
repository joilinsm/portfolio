const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const DATA_PATH = path.join(__dirname, 'data', 'contacts.json')

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}
  if(!name || !email || !message) return res.status(400).json({ success: false, message: 'Missing fields' })

  const newEntry = { id: Date.now(), name, email, message, createdAt: new Date().toISOString() }

  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    let arr = []
    if(!err) {
      try{ arr = JSON.parse(data) }catch(e){ arr = [] }
    }
    arr.push(newEntry)
    fs.writeFile(DATA_PATH, JSON.stringify(arr, null, 2), (err)=>{
      if(err) return res.status(500).json({ success: false, message: 'Failed to save' })
      console.log('New contact saved:', newEntry)
      return res.json({ success: true })
    })
  })
})

app.get('/api/health', (req, res)=> res.json({ status: 'ok' }))

// Serve static files at root (useful for local dev without base prefix)
app.use(express.static(path.join(__dirname, '..', 'dist')))

// Also serve the build under the base path for static hosts (e.g., GitHub Pages)
app.use('/portfolio', express.static(path.join(__dirname, '..', 'dist')))

// SPA fallback for production (root)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

// SPA fallback for base-path hosted deployments
app.get('/portfolio/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
