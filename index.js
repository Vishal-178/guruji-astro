const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// app is the express app
let app = express();
// port is the port number
const port = 8000;

// body-parser middleware to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs and layout to main
const expressLayouts = require("express-ejs-layouts");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/index"));
// create a server and listen on port 8000
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(`server started at port: ${port}`);
});
