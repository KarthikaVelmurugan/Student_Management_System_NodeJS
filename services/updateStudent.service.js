const updateStudent = require("../controllers/updateStudent.controller");

const updateStudentService = async (req, res) => {
  const phoneNumber = req.body.student.phonenumber;
  if(phoneNumber.toString().length == 10 ){
    const result = await updateStudent.updateStudent(req, res);
    if (result.affectedRows) {
      res.json({ status: 200, message: "Updated successfully!" });
    } else {
      res.json({
        status: 400,
        message: "Error occur during update the student record!",
      });
    }
  }  
  else {
      res.json({status : 400,message: " Phone Number shoudlbe in 10 digits!"})
  }
  
};

module.exports = {
  updateStudentService: updateStudentService,
};
