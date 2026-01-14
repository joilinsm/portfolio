module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#6EE7FF',
          purple: '#C084FC'
        }
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(closest-side, rgba(100,100,255,0.06), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)"
      }
    }
  },
  plugins: []
}