const express = require('express');
const Router =express.Router()
const studentModel =require('../models/students')

Router.get('/',(request,response)=>{
    const students =studentModel.find()
    response.status(200).json(students);
})
Router.post('/',(request,response)=>{
    response.send("adding new student ")
})
Router.patch('/:id',(request,response)=>{
    response.send(`displaying the students with id ${request.params.id}`)
})
Router.delete('/:id',(request,response)=>{
    response.send(`delete the student with id ${request.params.id}`)
})
module.exports = Router;