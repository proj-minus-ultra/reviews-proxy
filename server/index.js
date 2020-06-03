const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const port = 80

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public'),{maxAge:17536000}))

//Proxying - routes requests to proper service url - will possibly have to do this for every endpoint
//REVIEWS (make sure to update url for EC2)//
app.use('/reviews/:rev_Id', createProxyMiddleware({ target: 'http://ec2-54-213-243-55.us-west-2.compute.amazonaws.com/', changeOrigin: true}));
//http://localhost:3000/reviews/412312 => http://ec2-35-160-221-45.us-west-2.compute.amazonaws.com/reviews/412312

app.listen(port, () => console.log(`Proxy listening at http://localhost:${port} 😎`))

