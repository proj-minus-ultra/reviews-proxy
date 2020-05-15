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

