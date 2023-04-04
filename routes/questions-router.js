const questionsRouter = require("express").Router();
const { getQuestions, getQuestionById } = require("../controllers/controllers");

questionsRouter.route("/").get(getQuestions);

questionsRouter.route("/:question_id").get(getQuestionById);

module.exports = questionsRouter;
