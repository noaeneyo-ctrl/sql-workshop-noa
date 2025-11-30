const express = require("express");
const router = express.Router();
// import { addSchool } from "../scripts/addSchool";
const { addStudent } = require("../scripts/addStudent");
const { deleteStudent } = require("../scripts/deleteStudent");
const { getStudentName } = require("../scripts/getStudentName");

// TODO: Import database connection
// const connection = require('../db/connection');

/**
 * GET /schools
 * Retrieve all schools from the database
 */
router.get("/name", (req, res) => {
  console.log("blaaaaaaaaaa");
  getStudentName();
});

router.post("/:add", (req, res) => {
  addStudent(req.body.name, req.body.password, req.body.classroomid);
});
router.delete("/:id", (req, res) => {
  deleteStudent(req.params.id);
});

module.exports = router;
