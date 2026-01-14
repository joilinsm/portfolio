// CJS fallback config — mirrors ESM settings for environments expecting CommonJS
module.exports = {
  base: '/portfolio/',
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
}
