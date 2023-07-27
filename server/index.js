const express = require('express')
const  mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require ('./models/Employee')

const server = express()
server.use(express.json())
server.use(cors())

mongoose.connect('mongodb://localhost:27017/primefresh');

server.post('/', (req,res) =>{
    const {uid,password} = req.body
    EmployeeModel.findOne({uid:uid})
    .then(user =>{
        if(user){
            if(user.password === password){
                console.log(user);
                res.json('Login Successfully')
            } else {
                res.json('The password is incorrect')
            }
        } else {
            res.json('No user is existed')
        }
    })
})

server.post('/register', (req, res) => {
    const { uid } = req.body;

    EmployeeModel.findOne({ uid }) // Check if the UID already exists in the database
        .then(existingEmployee => {
            if (existingEmployee) {
                // If the UID already exists, send an error response
                return  res.json ('User already exist')
            } else {
                // If the UID does not exist, save the data
                EmployeeModel.create(req.body)
                    .then(employee => res.json(employee)) 
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});

server.listen(8000,() =>{
    console.log('server is running');
})