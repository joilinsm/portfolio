// CJS fallback config — mirrors ESM settings for environments expecting CommonJS
module.exports = {
  base: '/',
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
}
