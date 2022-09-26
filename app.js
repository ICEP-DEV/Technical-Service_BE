const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'technical_services'
})

//Get all reports
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as id ${connection.threadId}')

        connection.query(' SELECT * from report', (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {'';;
                console.log(err) 
            }
        })
    })
})  

//Get a report by ID
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as id ${connection.threadId}')

        connection.query(' SELECT  from report WHERE report_id = ?',[req.params.id], (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})

//Get all users
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err

        console.log(' connected as id ${connection.threadId}')

        connection.query(' SELECT * from user', (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})  


//Get all feedback
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as id ${connection.threadId}')

        connection.query(' SELECT * from feedback', (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})  

//Get all request
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as id ${connection.threadId}')

        connection.query(' SELECT * from request', (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})  










//Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
