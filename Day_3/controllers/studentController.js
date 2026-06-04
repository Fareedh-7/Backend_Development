let students = [];

const getStudent = (req, res) => {
  res.json(students);
};

const addStudent = (req, res) => {
  const student = req.body;
  students.push(student);
  res.json(student);
};

const getStudentCount = (req, res) => {
  res.send({
    totalStudents: students.length,
  });
};

module.exports = {
  getStudent,
  addStudent,
  getStudentCount,
};
