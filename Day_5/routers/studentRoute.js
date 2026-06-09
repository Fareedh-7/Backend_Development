const express = require ('express');

const router = express.Router();

const {getStudent,getStudents,addStudent,updateStudent,deleteStudent} = require('../controllers/studentController');

const studentSchema = require('../models/studentModel')

router.get('/',getStudents);

router.get('/:id',getStudent);

router.post('/',addStudent);

router.put('/:id',updateStudent);

router.delete('/:id',deleteStudent)

module.exports = router