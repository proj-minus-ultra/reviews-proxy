const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('express-http-proxy');

const port = 3000

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))


//REVIEWS (make sure to update url for EC2)//

app.use('/reviews/:rev_Id', proxy('http://localhost:9000/reviews/:rev_Id'));




app.listen(port, () => console.log(`Proxy listening at http://localhost:${port}`))

