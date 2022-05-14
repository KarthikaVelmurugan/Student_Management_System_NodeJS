const createStudent = require("../controllers/createStudent.controller");

const createStudentService = async (req, res) => {
  const phoneNumber = req.body.student.phonenumber;
  //Validating the digits of phone number
  if (phoneNumber.toString().length == 10) {
    const result = await createStudent.createStudent(req, res);
    if (result.affectedRows)
      res.json({ status: 200, message: "Inserted Successfully!" });
    else
      res.json({
        status: 400,
        message: "Error occured during insert the record!",
      });
  } else {
    res.json({
      status: 400,
      message: "MobileNumber should be have 10 digits!",
    });
  }
};

module.exports = {
  createStudentService: createStudentService,
};
