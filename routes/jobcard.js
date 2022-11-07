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
                                        '${req.body.category}', '${req.body.picture}', '${req.body.createdAt}', '${req.body.staff_name}',
                                        '${req.body.staff_number}')`;
    console.log(sql);
    connection.query(sql, params, (err, results)=>{
        if(err) throw err
        else{
            res.send( `Record ${params.jobcard_id} has been added`).status(200)
        }
        console.log(req.body)
    })
})
//***************************************IMPORT IMAGE************************************************* */

//IMPORT FILE
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb) => {  //call back function
        cb(null, 'images');
    },
    filename: (req,file, cd)=>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({storage: storage})

app.set("View engine", "ejs");

// app.get("/jobcord", (req,res)=>{ //  /jobcard
//     res.render("upload");
// });

app.post("/jobcard", upload.single('image'), (req,res)=>{ //input name = image
    res.send("upload");
});
module.exports = app;