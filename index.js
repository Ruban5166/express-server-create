import express from "express"
const app = express();
const port = 3000;

app.listen(port,()=>{
console.log(`the server is started port ${port}`)
})


app.get("/",(req,res)=>{
    res.send("<h1>well come to home</h1>")
})

app.get("/AboutUs",(req,res)=>{
    res.send("<h1>My name is Ruban</h1>")
})


app.get("/contact",(req,res)=>{
    res.send("<h1>email:sriruban5199@gmail.com ,mob:8714158251</h1>")
})

