const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postRouter = require('./routes/post-routes');
const contactRouters = require('./routes/contact-routers');
const postApiRouter = require("./routes/api-post-routes");
const createPath = require('./helper/create-path');

const app = express();

app.set("view engine", "ejs");
const PORT = 3000;
const db =
  "mongodb+srv://Evgeny:Pass321@cluster0.dl5ga.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));



app.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log("Listening server");
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
