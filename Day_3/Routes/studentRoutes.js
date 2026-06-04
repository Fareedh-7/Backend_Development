const express = require("express");

const router = express.Router();

const {
  getStudent,
  addStudent,
  getStudentCount,
} = require("../controllers/studentController");

router.get("/", getStudent);

router.post("/", addStudent);

router.get("/count", getStudentCount);

module.exports = router;
