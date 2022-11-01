const express = require('express')
const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql2')

const app = express()
const connection = require ('../DATABASE/database')
//*****************************REPORT*************************************** */
//GET DATA
app.get('/jobstatus', (req,res) => {
    let sql = `SELECT * FROM jobstatus`
    connection.query(sql,(err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//GET DATA BY ID
app.get('/jobstatus/:id', (req,res) => {
    let sql = `SELECT * FROM jobstatus WHERE jobstatus_id ='${req.params.id}' `
    connection.query(sql, [req.params.id], (err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//update DATA
app.put('/jobstatus', (req,res) => {
    //data destructuring
    const params = req.body //get data
    const {jobstatus_id, jobstatus, jobcard_id} = req.body //get data and store it in the variable

    let sql = `UPDATE jobstatus SET jobstatus = ? WHERE jobstatus_id=?`;
    console.log(sql);
    connection.query(sql, [jobstatus_id, jobstatus, jobcard_id], (err, results)=>{
        if(err) throw err
        else{
            res.send( `Record ${params.jobstatus_id} has been updated`).status(200)
        }
        console.log(req.body)
    })
})
module.exports = app;