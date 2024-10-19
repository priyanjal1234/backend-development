const express = require('express')
const app = express()

app.get("/home",function(req,res) {
    res.send("Hello from backend")
})

app.listen(3000,function() {
    console.log("Server is running on port 3000")
})