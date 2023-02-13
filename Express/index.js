

const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())    /// this will read my post json file

app.get("/",(req,res)=>{

    res.setHeader("Content-Type","text/html")
    res.send("<h1> Hello in Side H1 <h1/>")

})


app.get("/data",(req,res)=>{

    // const dataStream = fs.createReadStream("./data.json","utf-8")
     const dataStream = fs.createReadStream("./lok.html","utf-8")

    dataStream.pipe(res)

})


app.post("/add",(req,res)=>{
 

    console.log(req.body)
    res.send("Data Added")

})



app.get("/student",(req,res)=>{

    const data = fs.readFileSync("./data.json","utf-8")

    const parseData = JSON.parse(data)

    res.send(parseData.student)

})



app.get("/teacher",(req,res)=>{

    const data = fs.readFileSync("./data.json","utf-8")

    const parseData = JSON.parse(data)

    res.send(parseData.teacher)

})


app.post("/addstudent",(req,res)=>{
// read file
    const data = fs.readFileSync("./data.json","utf-8")

    // parse data

  const pdata = JSON.parse(data)

    // push data

    pdata.student.push(req.body)

  fs.writeFileSync("./data.json", JSON.stringify(pdata))

    res.send("Data Added Sucessfully")

})


app.listen(8080,()=>{
    console.log("This is my first express")
})
