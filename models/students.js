const mongoose = require('mongoose');
const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    entrolledDepartment:{
        type:String,
        required:true
    },
    entrollmentDate:{
        type:Date,
        default:Date.now()
    }
    
});
module.exports=mongoose.model('studentModel',studentSchema)