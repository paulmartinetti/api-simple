const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const { url } = require('inspector');

module.exports = http.createServer((req, res) => {

  var userOps = require('./controller.js'); // importing the main logic
  const reqUrl =  new URL(req.url);

  // GET endpoint
  if(reqUrl.pathname == '/projets' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.getProjets(req, res);
  }

  // POST endpoint
  else if(reqUrl.pathname == '/user' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);
  }

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.invalidUrl(req, res);
  }
})
