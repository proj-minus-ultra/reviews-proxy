const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const port = 3000

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))

//Proxying - routes requests to proper service url
//REVIEWS (make sure to update url for EC2)//
app.use('/reviews/:rev_Id', createProxyMiddleware({ target: 'http://localhost:9000', changeOrigin: true }));

app.listen(port, () => console.log(`Proxy listening at http://localhost:${port}`))

