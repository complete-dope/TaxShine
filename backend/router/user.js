const express = require('express')
const router = express.Router()
const path = require('path')
const User = require('../models/user.js')

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../index2.html'))
})

router.get('/success' ,(req,res)=>{
    res.sendFile(path.join(__dirname , '../success.html'))
})

router.post('/take_data', async (req, res) => {
    try {
        console.log(req.body);
        var name = req.body.name
        var email = req.body.email
        var description = req.body.description
        var phoneno = req.body.phoneno
        const user = new User({
            "name": name,
            "email": email,
            "description": description,
            "phoneno": phoneno
        })
        await user.save()
        // res.send()
        return res.redirect(301 , 'success') //301 automatic redirect
        return res.sendFile(path.join(__dirname, '../success.html'))
        //send a html file after the success
    } catch (error) {
        res.send("Error : Please Enter the Correct credentials." + error)
    }

})

module.exports = router 