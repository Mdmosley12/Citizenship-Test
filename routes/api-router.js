const apiRouter = require("express").Router();
const questionsRouter = require("./questions-router");
const answersRouter = require("./answers-router");
const randomQuestionsRouter = require("./randomQuestions-router");
const { getEndpoints } = require("../controllers/controllers");

apiRouter.get("/", getEndpoints);

apiRouter.use("/questions", questionsRouter);

apiRouter.use("/randomQuestions", randomQuestionsRouter);

apiRouter.use("/answers", answersRouter);

module.exports = apiRouter;
