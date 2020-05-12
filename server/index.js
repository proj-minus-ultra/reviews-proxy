// const http = require('http');
// const httpProxy = require('http-proxy');

// var proxy = httpProxy.createProxyServer({});

// //
// // Create your custom server and just call `proxy.web()` to proxy
// // a web request to the target passed in the options
// // also you can use `proxy.ws()` to proxy a websockets request
// //
// var server = http.createServer(function(req, res) {
//   // You can define here your custom logic to handle the request
//   // and then proxy the request.
//   proxy.web(req, res, { target: 'http://localhost:3000' });
// });

// console.log("listening on port 3000")
// server.listen(3000);

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))


// This will retrieve and send a single product to page by selected by i


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

