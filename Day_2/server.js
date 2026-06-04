const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

let students = [];
let idCounter = 1;

app.post("/students", (req, res) => {
  const student = {
    id: idCounter++,
    name: req.body.name,
    age: req.body.age,
  };
  students.push(student);
  res.json(students);
});

app.get("/students",(req,res)=>{
    res.json(students)
})

app.delete("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    students = students.filter(student => student.id !== id);
    res.send("Student Deleted");
})

app.put("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);
    if(!student){
        return res.status(404).send("No Student found");
    }
    student.name = req.body.name
    student.age = req.body.age
    res.json(student)
})

app.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);
    if(!student){
        return res.status(404).send("No Student found")
    }
    res.json(student)
})

app.get("/students/:id/count",(req,res)=>{
    res.json({
      totalStudents : students.length
    })
})

app.listen(3000, () => {
  console.log("Server Started");
});
