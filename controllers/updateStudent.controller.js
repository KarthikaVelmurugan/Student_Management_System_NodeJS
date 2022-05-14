const db = require("../database/db");
const updateStudent = async (req, res) => {
  const requestBody = req.body.student;
  const result = await db.query(
    `UPDATE STUDENTS SET NAME = '${requestBody.name}',AGE=${requestBody.age},DEPARTMENT='${requestBody.department}',PHONENUMBER=${requestBody.phonenumber},EMAIL = '${requestBody.email}' WHERE ID = ${req.params.id} `
  );
  return result;
};

module.exports = {
  updateStudent: updateStudent,
};
