// const mongodb = require('mongodb')
const moongoose = require('mongoose')


// here lies the mystery
// use .cli provided by mongod atlas
const MONGODB_URI = 'mongodb+srv://taxshine:elonmusk@123@cluster0.hq7cy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// we have to add this uri in our heroku app when the deployment time comes
moongoose.connect(MONGODB_URI||'mongodb://127.0.0.1:27017/taxshine' ,{
    useNewUrlParser:true
})
