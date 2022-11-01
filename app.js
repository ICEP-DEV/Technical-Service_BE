const express = require('express')
const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql2')
const cors = require ('cors')

const app = express() //app stores all the methods
const port = process.env.PORT || 3000 //for publishing app

const jobcard = require('./routes/jobcard')
const request = require('./routes/request')
const report = require('./routes/report')
const jobstatus = require('./routes/jobstatus')

app.use(bodyParser.urlencoded({ extended: false})) //ensure xampp is using the body parser
app.use(bodyParser.json())

app.use(bodyParser.json())
app.use(cors({origin:"*"}))
app.use('/',request)
app.use('/',jobcard)
app.use('/',report)
app.use('/', jobstatus)


//Listen on environment port or 3000
app.listen(port, () => console.log(`Listen on port ${port}`))
