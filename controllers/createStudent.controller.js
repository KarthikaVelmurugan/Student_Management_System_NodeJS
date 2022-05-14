const db = require("../database/db");

const createStudent = async (req, res) => {
    console.log("request body",req.body.student)
  const requestBody = req.body.student;
  const results = await db.query(
    `INSERT INTO STUDENTS(NAME,AGE,DEPARTMENT,PHONENUMBER,EMAIL) VALUES ('${requestBody.name}',${requestBody.age},'${requestBody.department}',${requestBody.phonenumber},'${requestBody.email}')`
  );
  return results;
};

module.exports = {
  createStudent: createStudent,
};
