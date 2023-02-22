const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const middleware = (req,res,next) =>{
    console.log("I am in middleware 1")
    console.log("I got the First request")
    next()
}

const middleware2 = (req,res,next) =>{
    console.log(req+"I am in middleware 2")
    next()
}

app.get("/",(req, res)=>{
    console.log("I am in Home page")
    res.send("<h1>Home Page</h1>")
    res.end()
})
app.get("/first", middleware, (req, res)=>{
    console.log("Received the login request")
    res.send("<h1>Middleware 1</h1>")
    res.end()
})

app.get("/second", middleware2, (req, res)=>{
    console.log("Received the Second middleware request")
    res.send("<h1>Middleware 2</h1>")
    res.end()
})

app.get("/cors", (req,res)=>{
    res.json({
        "Student" : [{
            "name":"Mustafijur Rahaman",
            "city":"India"
        }]
    })
    res.end()
})


app.listen(3000, ()=>{
    console.log("Server is started on port 3000")
})


