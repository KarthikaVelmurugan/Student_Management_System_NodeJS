const db = require("../database/db");
const deleteStudent = async (req, res) => {
  const result = await db.query(
    `DELETE FROM STUDENTS WHERE ID = ${req.params.id}`
  );
  return result;
};

module.exports = {
  deleteStudent: deleteStudent,
};
