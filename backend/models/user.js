const mongoose = require('mongoose')
const {Schema , model} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    description:{
        type:String,
        trim:true,
        minlength:2,
        lowercase:true
    },
    phoneno:{
        type:Number,
        trim:true
        // minlength:10,
        // maxlength:10,
        // unique:true
    }
})

const user = model('user' , userSchema)
module.exports = user