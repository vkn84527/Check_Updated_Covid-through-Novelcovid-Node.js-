const express=require("express")
const api = require('novelcovid');
api.all().
then(console.log)
//api.countries().then(console.log) 
const app =express();
app.get("/",(req,res) =>{
    res.send("Hello")
})
app.listen(3000,() => {
    console.log("port listen on 3000")
})
