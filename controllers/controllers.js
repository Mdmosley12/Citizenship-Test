const {
  selectEndpoints,
  selectAllQuestions,
  selectQuestionById,
  selectRandomQuestions,
  selectAllAnswers,
  selectAnswersByQuestionId,
} = require("../models/models.js");

const getEndpoints = (request, response, next) => {
  selectEndpoints()
    .then((endpoints) => {
      response.status(200).send({ endpoints });
    })
    .catch((err) => {
      next(err);
    });
};

const getQuestions = (request, response, next) => {
  selectAllQuestions()
    .then((questions) => {
      response.status(200).send({ questions });
    })
    .catch((err) => {
      next(err);
    });
};

const getQuestionById = (request, response, next) => {
  const { question_id } = request.params;
  selectQuestionById(question_id)
    .then((question) => {
      response.status(200).send({ question });
    })
    .catch((err) => {
      next(err);
    });
};

const getRandomQuestions = (request, response, next) => {
  selectRandomQuestions()
    .then((questions) => {
      response.status(200).send({ questions });
    })
    .catch((err) => {
      next(err);
    });
};

const getAnswers = (request, response, next) => {
  selectAllAnswers()
    .then((answers) => {
      response.status(200).send({ answers });
    })
    .catch((err) => {
      next(err);
    });
};

const getAnswersByQuestionId = (request, response, next) => {
  const { question_id } = request.params;
  selectAnswersByQuestionId(question_id)
    .then((answers) => {
      response.status(200).send({ answers });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getEndpoints,
  getQuestions,
  getQuestionById,
  getAnswers,
  getAnswersByQuestionId,
  getRandomQuestions,
};
