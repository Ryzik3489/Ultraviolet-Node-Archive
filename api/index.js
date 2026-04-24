const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
  // Замени на сайт, который хочешь открыть
  const target = "https://google.com"; 
  
  proxy.web(req, res, {
    target: target,
    changeOrigin: true
  }, (e) => {
    res.status(500).send(e.message);
  });
};
