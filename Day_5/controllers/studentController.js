const Students = require("../models/studentModel");

const getStudents = async (req, res) => {
  const student = await Students.find();
  res.json(student);
};

const addStudent = async (req, res) => {
    try{
  const student = await Students.create({
    name: req.body.name,
    age: req.body.age,
  });

  res.status(201).json({
    success: true,
    data: student,
  });
}catch(error){
    res.status(500).json({
        success : false,
        message : error.message
    })
}
};

const updateStudent = async (req, res) => {
  try {
      const student = await Students.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          age: req.body.age,
        },
        {
          new: true,
        },
      );
      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }
      res.status(200).json({
        success: true,
        data: student,
      });
    }catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStudent = async(req,res) => {
    try{
    const student = await Students.findById(
        req.params.id
    )
    if(!student){
        res.status(404).json({
            success : false,
            message : 'Student Not Found'
        })
    }
    res.json(student)
}catch(error){
    res.status(500).json({
        success : false,
        message : error.message
    })
}
}



module.exports = { getStudent,getStudents, addStudent ,updateStudent,deleteStudent};
