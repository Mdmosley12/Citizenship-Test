require("dotenv").config();
const express = require("express");
const app = express();
const apiRouter = require("../routes/api-router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", apiRouter);

app.all("*", (request, response, next) => {
  response.status(404).send({ msg: "Path Not Found!" });
});

app.use((err, request, response, next) => {
  if (err.status === 404) {
    response.status(404).send({ msg: "Question Not Found!" });
  } else {
    next(err);
  }
});

module.exports = app;
