const answersRouter = require("express").Router();
const { getAnswers } = require("../controllers/controllers");

answersRouter.route("/").get(getAnswers);

module.exports = answersRouter;
