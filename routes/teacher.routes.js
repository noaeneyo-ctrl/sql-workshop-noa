const express = require("express");
const router = express.Router();
// import { addSchool } from "../scripts/addSchool";
const { addTeacher } = require("../scripts/addTeacher");
const { updateTeacher } = require("../scripts/updateTeacher");

// TODO: Import database connection
// const connection = require('../db/connection');

/**
 * GET /schools
 * Retrieve all schools from the database
 */
router.get("/", (req, res) => {
  // TODO: Write SQL query to SELECT all schools
  // TODO: Execute query using database connection
  // TODO: Send response with school data
  // TODO: Handle errors appropriately

  res.json({ message: "TODO: Implement GET /schools endpoint" });
});

router.post("/:add", (req, res) => {
  addTeacher(
    req.body.teachername,
    req.body.teacherpassword,
    req.body.teacheremail
  );
});

router.put("/:id", (req, res) => {
  console.log("aaaaaaaaaaaaaaaaaaaaa");
  const bb = req.body;
  const key = Object.keys(bb)[0];
  const value = Object.values(bb)[0];
  const id = req.params.id;
  updateTeacher(id, key, value);
});

module.exports = router;
