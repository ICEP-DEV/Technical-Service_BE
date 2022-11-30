const express = require('express')
const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql2')

const app = express()
const connection = require ('../DATABASE/database')

//*****************************REPORT*************************************** */
//GET DATA
app.get('/report', (req,res) => {
    let sql = `SELECT * FROM report`
    connection.query(sql,(err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//GET DATA BY ID
app.get('/report/:id', (req,res) => {
    let sql = `SELECT * FROM report WHERE report_id ='${req.params.id}' `
    connection.query(sql, [req.params.id], (err,results)=>{
        if(err) throw err
        else{
            res.send(results).status(200)
        }
    })
})
//ADD DATA
app.post('/report', (req,res) => {
    const params = req.body //get data

    let sql = `INSERT INTO report VALUES (NULL, '${req.body.description}', '${req.body.date}', '${req.body.category_type}', 
                                            '${req.body.staff_name}', '${req.body.artisan_name}', '${req.body.issue}')`;
    console.log(sql);
    connection.query(sql, params, (err, results)=>{
        if(err) throw err
        else{
            res.send( `Record ${params.report_id} has been added`).status(200)
        }
        console.log(req.body)
    })
})
//update DATA
app.put('/report/:id', (req,res) => {
    //data destructuring
    const report_id = req.params.id;
    const issue = req.body.issue;
    const description = req.body.description;
    const date = req.body.date
    const category_type = req.body.category_type;
    const staff_name = req.body.staff_name;
    const artisan_name = req.body.artisan_name;
    // const params = req.body //get data
    // const {report_id, description, date, category_type, staff_name, artisan_name, issue} = req.body //get data and store it in the variable

    let sql = `UPDATE report SET description = ?, date = ?, category_type = ?, staff_name = ?, artisan_name = ?, issue = ? WHERE report_id='${req.params.id}'`;
    connection.query(sql, [description, date, category_type, staff_name, artisan_name, issue, report_id], (err, results)=>{
        if(err) throw err
        else{
            res.send("UPDATED")
        }
    })
})

//DELETE DATA
app.delete('/deletereport/:id', (req,res) => {
    let sql = `DELETE FROM report WHERE report_id ='${req.params.id}' `
    connection.query(sql, [req.params.id], (err,results)=>{
        if(err) throw err
        else{
            res.send(`RECORD '${req.params.id}' HAS BEEN DELETED`).status(200)
        }
    })
})
module.exports = app;