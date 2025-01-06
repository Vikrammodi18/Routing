const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("index")
})

app.get("/diceroll",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6 +1)
    res.render('diceroll',{number:diceVal})
})

app.get("/:username",(req,res)=>{
    const uName = req.params.username
    // console.log(uName)
    res.render('user',{uName})
    
})
app.get("/ig/:username",(req,res)=>{
    const{username} = req.params
    let followers = ["rahul","abhi","Tanya","Mohan"]
    // console.log(username)
    res.render("insta",{username,followers})
})
app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})