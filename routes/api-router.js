const apiRouter = require("express").Router();
const questionsRouter = require("./questions-router");
const answersRouter = require("./answers-router");

apiRouter.use("/questions", questionsRouter);

apiRouter.use("/answers", answersRouter);

module.exports = apiRouter;
