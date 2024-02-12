const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:String,
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,
    },
})

const users = mongoose.model('users',userSchema)

module.exports = users