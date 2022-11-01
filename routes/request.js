const express = require('express')
const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql2')

const app = express()
const connection = require ('../DATABASE/database')

//*****************************REQUEST*************************************** */
//GET DATA
app.get('/request', (req,res) => {
    let sql = `SELECT * FROM request`
    connection.query(sql,(err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//GET DATA BY ID
app.get('/request/:id', (req,res) => {
    let sql = `SELECT * FROM request WHERE request_id ='${req.params.id}' `
    connection.query(sql, [req.params.id], (err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//ADD DATA
app.post('/request', (req,res) => {
    const params = req.body //get data
    let sql = `INSERT INTO request VALUES (NULL, '${req.body.venue}', '${req.body.time_requested}', '${req.body.date}', 
                                        '${req.body.picture}', '${req.body.staff_number}', '${req.body.staff_name}', '${req.body.issue}', '${req.body.category_type}')`;
    console.log(sql);
    connection.query(sql, params, (err, results)=>{
        if(err) throw err
        else{
            res.send( `Record ${params.request_id} has been added`).status(200)
        }
        console.log(req.body)
    })
})

module.exports = app;