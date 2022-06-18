// import express from 'express';
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");

// Check folder default for file static will be into public folder
app.use(express.static(path.join(__dirname, "public"))); // === localhost:3000/public

// Apply Middleware
// Can read body from Post method
app.use(
  express.urlencoded({
    extended: true,
  })
); 
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Route init
route(app)

// Action ---> Dispatcher ---> Function handlers === Controller (MVC)
// app.get("/", (req, res) => {
//   res.render("home");
// });

// Web server is created by expressJS
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
