const express = require('express');

const route = express.Router();

const {getStudent,addStudent,getStudentCount} = require('../controller/studentController');

const validation = require('../middleware/validation');
const router = require('../../Day_3/Routes/studentRoutes');

route.get('/',getStudent);

route.post('/',validation,addStudent);

route.get('/count',getStudentCount)

module.exports = route