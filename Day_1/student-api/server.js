const express = require('express');  // ! imports express from the node modules

const app = express();  // ! creating an instance (it is the basement for creating server)

app.use(express.json()); // ! incoming request is converted to json format

app.get('/',(req,res)=>{
    res.send("Server is running");
})

let students = []; // ! In memory Storage

app.post('/students',(req,res)=>{
    const student = req.body;
    students.push(student);
    res.send('Student Added')
})

app.get('/students',(req,res)=>{
    res.json(students);
})

app.listen(3000, () => {
  console.log("Server started at port 3000");
});