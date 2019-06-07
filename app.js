var express = require('express');
var path = require('path');
var fs = require('fs');
const rendertron = require('rendertron-middleware');
 
var app = express();

const bots = [
  'googlebot',
  'baiduspider',
  'bingbot',
  'embedly',
  'facebookexternalhit',
  'linkedinbot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'slackbot',
  'twitterbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
];

app.use(rendertron.makeMiddleware({
  proxyUrl: "https://render-tron.appspot.com/render",
  userAgentPattern: new RegExp(bots.join('|'), 'i'),
  // injectShadyDom: true
}));

console.log(path.join(__dirname,'../dist'))

app.use(express.static(path.join(__dirname, '../dist')));
app.use('*', express.static(path.join(__dirname, '../dist')));

app.listen(4200);

module.exports = app;