const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser')
const Userrouter = require('./router/user')
const port = process.env.PORT || 3000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(Userrouter)

app.listen(port , ()=>{
    console.log("The sever is up at port " ,port);
})