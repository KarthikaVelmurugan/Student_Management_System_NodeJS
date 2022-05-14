const deleteStudent = require("../controllers/deleteStudent.controller");

const deleteStudentService = async (req, res) => {
  const result = await deleteStudent.deleteStudent(req, res);

  if (result.affectedRows) {
    res.json({ status: 200, message: "Deleted successfully!" });
    console.log("Helo karthika");
  } else {
    res.json({
      status: 400,
      message: "Error occured during deleting the student record",
    });
  }
};

module.exports = {
  deleteStudentService: deleteStudentService,
};
