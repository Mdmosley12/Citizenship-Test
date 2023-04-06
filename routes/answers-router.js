const answersRouter = require("express").Router();
const {
  getAnswers,
  getAnswersByQuestionId,
} = require("../controllers/controllers");

answersRouter.route("/").get(getAnswers);

answersRouter.route("/:question_id").get(getAnswersByQuestionId);

module.exports = answersRouter;
