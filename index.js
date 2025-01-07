const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
// publicpath = path.join(__dirname,'/public')
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
    const instaData = require('./data.json')
    let {username} = req.params
    data = instaData[username]
    if(data){
        res.render("insta",{data})

    }else{
        res.render("error")
    }
})


app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})