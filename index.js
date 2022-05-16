const express = require("express"); // imported the express server
const bodyParser = require("body-parser"); //imported the body-parser
const router = require("./routes/route"); 
const app = express(); //Initialize the express server object

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Write the test API - to makesure whether the APIs working properly or not
app.get("/test", (request, response) => {
  response.send("node server is still running..");
});

app.use(router);

// Listen(portnumber,function) -> it helps to starting the node server with respective configured port.
app.listen(3005, function serverStart() {
  console.log("node server started in Port 3005");
});
