require('dotenv').config()
const express = require('express');
const app =express()
const process = require('process')
const PORT=3500
const students =require('./routes/students');
const studentModel =require('./models/students')
const  mongoose  = require('mongoose');

mongoose.connect(process.env.DB_URL)
const db =mongoose.connection()
db.on('error',(err )=> console.log(err))
db.once('open',()=>console.log('connection established'))

app.get('/',(req,res)=>{
  res.send("welcome to student entrolment")
})

app.use('/api/v1/students',students)
app.use('/api/v1/studentModel',studentModel)

app.listen(PORT,console.log("server start"))