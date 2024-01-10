// Add this to your React app (assuming it's a Node.js app)
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ target: 'https://repulsive-mite-hosiery.cyclic.app', changeOrigin: true }));
};
