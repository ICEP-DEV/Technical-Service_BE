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
    database        : 'database'
})

//Get all user
app.get('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

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

//Get a user by ID
app.get('/:feedback_id', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

        connection.query(' SELECT * from feedback WHERE feedback_id = ?',[req.params.userID], (err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err)
            }
        })
    })
})

//Delete a record / user
app.delete('/:feedback_id', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

        connection.query(' DELETE from feedback WHERE feedback_id =?', [req.params.feedback_id],(err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send('user with the record feedback_id: ${[req.params.userID]} has been deleted')
            }else {
                console.log(err)
            }
        })
    })
})

//Add a record / feedback
app.post('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

        const params = req.body
        const feedback_id = req.body.feedback_id;
        const staff_id = req.body.staff_id;
        const artisan_id = req.body.artisan_id;
        const admin_id = req.body.admin_id;
        const status_id = req.body.status_id;
        const description = req.body.description;
        const request_id = req.body.request_id;

        connection.query(' INSERT INTO feedback(feedback_id,staff_id,artisan_id,admin_id,status_id,description,request_id) values("'+feedback_id+'","'+staff_id+'","'+artisan_id+'","'+admin_id+'","'+status_id+'","'+description+'","'+request_id+'")', params ,(err, rows) => {
          //  connection.release()// return the connection to pool

            if(!err) {
                res.send('user with the record feedback_id: ${params.userID} has been added')
            }else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})

//update a record / feedback
app.put('', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(' connected as feedback_id ${connection.threadId}')

        const {feedback_id,  tagline, description} = req.body


        connection.query(' UPDATE feedback SET name =? WHERE feedback_id =?',[ feedback_id], params ,(err, rows) => {
            connection.release()// return the connection to pool

            if(!err) {
                res.send('user with the record userID: ${params.feedback_id} has been added')
            }else {
                console.log(err)
            }
        })

        console.log(req.body)
    })
})



//Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
