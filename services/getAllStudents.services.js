const getAllStudents = require("../controllers/getAllStundents.controller")

const getAllStudentService = async (req,res) => {
    const results = await getAllStudents.getAllStudents(req,res);
    res.json(results);
}

module.exports = {
    getAllStudentService :getAllStudentService
}