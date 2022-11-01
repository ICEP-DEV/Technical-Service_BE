const express = require('express')
const bodyParser = require('body-parser')   //used by xampp to pass json data
const mysql = require('mysql2')

const app = express()
const connection = require ('../DATABASE/database')
//*****************************JOB CARD************************************ */
//GET DATA
app.get('/jobcard', (req,res) => {
    let sql = `SELECT * FROM jobcard`
    connection.query(sql,(err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//GET DATA BY ID
app.get('/jobcard/:id', (req,res) => {
    let sql = `SELECT * FROM jobcard WHERE jobcard_id ='${req.params.id}' `
    connection.query(sql, [req.params.id], (err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//ADD DATA
app.post('/jobcard', (req,res) => {
    const params = req.body //get data

    let sql = `INSERT INTO jobcard VALUES (NULL, '${req.body.request_id}', '${req.body.venue}', '${req.body.description}',
                                        '${req.body.category}','${req.body.status}', '${req.body.picture}', '${req.body.createdAt}',
                                         '${req.body.staff_number}', '${req.body.staff_name}')`;
    console.log(sql);
    connection.query(sql, params, (err, results)=>{
        if(err) throw err
        else{
            res.send( `Record ${params.jobcard_id} has been added`).status(200)
        }
        console.log(req.body)
    })
})

module.exports = app;