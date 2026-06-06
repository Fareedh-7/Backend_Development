let students = []

const getStudent = (req,res) => {
    res.json(students);
}

const addStudent = (req,res) => {
    const student = req.body
    students.push(student)
    res.status(201).json({
        success : true,
        message : "Student Added",
        data : student
    });
}

const getStudentCount = (req,res) => {
    res.json({
        totalCount : students.length
    })
}

module.exports = {getStudent,addStudent,getStudentCount}