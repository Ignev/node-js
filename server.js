const express = require("express");

const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postRouter = require('./routes/post-routes');
const contactRouters = require('./routes/contact-routers');
const postApiRouter = require("./routes/api-post-routes");
const createPath = require('./helper/create-path');
const chalk = require("chalk");
require('dotenv').config()
const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;
const app = express();

app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg("Connected to DB")))
  .catch((error) => console.log(errorMsg(error)));



app.listen(process.env.PORT, "localhost", (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg("Listening server"));
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.use(postRouter);
app.use(contactRouters);
app.use(postApiRouter);

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

app.use((req, res) => {
  const title = "Error page";
  res.status(404).render(createPath("error"), { title });
});
