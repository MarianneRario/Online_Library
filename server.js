const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
//export db
const db = require("./database/connection");
//hook the router to server
//exported router 
const router = require("./routes/index");

//mongodb connection
db();
//set view engine
app.set("view engine", "ejs");
//set where are views coming from
app.set("views", __dirname + "/views");
//hookup express layouts(what our layout files is going to be)
app.set("layout", "layouts/layout");
//use express layouts
app.use(expressLayouts);
//location of public files
app.use(express.static("public"));
//use for mounting the path for routing
app.use("/", router);




app.listen(process.env.PORT || 3000, () => {
    console.log("App listening on http://localhost:3000");
});