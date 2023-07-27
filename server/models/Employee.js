const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    uname:String,
    uid:String,
    password:String,
    department:String
})

const EmployeeModel = mongoose.model('employees', EmployeeSchema)
module.exports= EmployeeModel