const express = require("express");
const router = express.Router();
const { addSchool } = require("../scripts/addSchool");
const { getSchoolAdmins } = require("../scripts/getSchoolAdmins");

/**
 * GET /schools
 * Retrieve all schools from the database
 */
router.get("/admins", (req, res) => {
  getSchoolAdmins();
});

router.post("/:add", (req, res) => {
  const { schoolname } = req.body;
  if (!schoolname) throw new Error("school should be defined");
  addSchool(schoolname);
});

module.exports = router;
