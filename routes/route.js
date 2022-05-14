const express = require("express");
const  createStudentService  = require("../services/createStudent.services");
const deleteStudentService = require("../services/deleteStudent.service");
const getAllStudentService  = require("../services/getAllStudents.services");
const  getStudentService  = require("../services/getStudent.services");
const updateStudentService = require("../services/updateStudent.service");
const router = express.Router();
// Get all students info

router.route("/").get(getAllStudentService.getAllStudentService);

//Get specific student record
router.route("/:id").get(getStudentService.getStudentService);

// Create the student
router.route("/").post(createStudentService.createStudentService);

// Update the student
router.route("/:id").put(updateStudentService.updateStudentService);

//delete the student record
router.route("/:id").delete(deleteStudentService.deleteStudentService);

module.exports = router;
