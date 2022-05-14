const getStudent = require("../controllers/getStudent.controller");
const getStudentService = async (req, res) => {
  const result = await getStudent.getStudent(req, res);
  console.log(result,result.length)
  if (result.length >= 1)
   res.json(result);
  else
    res.json({
      status: 400,
      message: `No record found for the id ${req.params.id}`,
    });
};

module.exports = {
  getStudentService: getStudentService,
};
