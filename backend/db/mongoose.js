// const mongodb = require('mongodb')
const moongoose = require('mongoose')
moongoose.connect('mongodb://127.0.0.1:27017/taxshine' ,{
    useNewUrlParser:true
})
