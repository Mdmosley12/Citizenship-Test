const apiRouter = require("express").Router();
const questionsRouter = require("./questions-router");
const answersRouter = require("./answers-router");
const randomQuestionsRouter = require("./randomQuestions-router");

apiRouter.use("/questions", questionsRouter);

apiRouter.use("/randomQuestions", randomQuestionsRouter);

apiRouter.use("/answers", answersRouter);

module.exports = apiRouter;
