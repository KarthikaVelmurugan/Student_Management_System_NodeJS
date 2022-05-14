const db = require("../database/db")

const getAllStudents = async (req,res) => {
    const results = await db.query("SELECT * FROM STUDENTS");
    console.log("results",results)
    return results
 }

module.exports={
    getAllStudents :getAllStudents
}