const db = require("../database/db");

const getStudent = async (req, res) => {
  const result = await db.query(
    `SELECT * FROM STUDENTS WHERE ID = ${req.params.id}`
  );
  return result;
};

module.exports = {
  getStudent: getStudent,
};
