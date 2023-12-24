import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://repulsive-mite-hosiery.cyclic.app',
      changeOrigin: true,
    })
  );
};
