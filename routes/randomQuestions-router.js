const randomQuestionsRouter = require("express").Router();
const { getRandomQuestions } = require("../controllers/controllers");

randomQuestionsRouter.route("/").get(getRandomQuestions);

module.exports = randomQuestionsRouter;
