const express = require("express"); // imported the express
const bodyParser = require("body-parser");
const getAllStudentService = require("./services/getAllStudents.services");
const createStudentService = require("./services/createStudent.services");
const getStudentService = require("./services/getStudent.services");
const updateStudentService = require("./services/updateStudent.service");
const deleteStudentService = require("./services/deleteStudent.service")
const app = express(); //Initialize the express server object

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (request, response) => {
  response.send("node server is still running..");
});

// Get all students info
app.get("/", getAllStudentService.getAllStudentService);

//Get specific student record

app.get("/:id", getStudentService.getStudentService);

// Create the student
app.post("/", createStudentService.createStudentService);

// Update the student
app.put("/:id", updateStudentService.updateStudentService);

//delete the student record
app.delete("/:id",deleteStudentService.deleteStudentService);

// Listen(protnumber,function) -> it helps to starting the node server with respective configured port.
app.listen(3005, function serverStart() {
  console.log("node server started in Port 3005");
});
