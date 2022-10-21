const express = require('express')
const bodyParser = require('body-parser')   //to pass json data
const mysql = require('mysql')

const app = express() //app stores all the methods
const port = process.env.PORT || 5000 //for publishing app

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())


//CONNECTING TO THE DB
const connection = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'ts_database'
})
//CHECK CONNECTION
connection.connect(function(err) {
    if (err){
        console.error('error connecting ' + err.stack);
        return;
    }
    console.log('connected as [id ' + connection.threadId)
});
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
            res.send( `Record ${params.category} has been added`).status(200)
        }
        console.log(req.body)
    })
})
//******************************************************************** */
// //Get all reports
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) =>{
//         if(err) throw err
//         console.log(' connected as id ${connection.threadId}')

//         connection.query(' SELECT * from report', (err, rows) => {
//             connection.release()// return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             }else {'';;
//                 console.log(err) 
//             }
//         })
//     })
// })  

// //Get a report by ID
// app.get('/:id', (req, res) => {
//     pool.getConnection((err, connection) =>{
//         if(err) throw err
//         console.log(' connected as id ${connection.threadId}')

//         connection.query(' SELECT  from report WHERE report_id = ?',[req.params.id], (err, rows) => {
//             connection.release()// return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             }else {
//                 console.log(err)
//             }
//         })
//     })
// })

// //Get all users
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) =>{
//         if(err) throw err

//         console.log(' connected as id ${connection.threadId}')

//         connection.query(' SELECT * from user', (err, rows) => {
//             connection.release()// return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             }else {
//                 console.log(err)
//             }
//         })
//     })
// })  


// //Get all feedback
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) =>{
//         if(err) throw err
//         console.log(' connected as id ${connection.threadId}')

//         connection.query(' SELECT * from feedback', (err, rows) => {
//             connection.release()// return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             }else {
//                 console.log(err)
//             }
//         })
//     })
// })  

// //Get all request
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) =>{
//         if(err) throw err
//         console.log(' connected as id ${connection.threadId}')

//         connection.query(' SELECT * from request', (err, rows) => {
//             connection.release()// return the connection to pool

//             if(!err) {
//                 res.send(rows)
//             }else {
//                 console.log(err)
//             }
//         })
//     })
// })  
//-*********************************************************************









//Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
