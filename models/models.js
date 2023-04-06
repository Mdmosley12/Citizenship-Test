const { pool } = require("../dbConfig/connection");

const selectAllQuestions = () => {
  const queryString = "SELECT * FROM questions;";
  return pool
    .promise()
    .query(queryString)
    .then((result) => {
      return result[0];
    });
};

const selectQuestionById = (question_id) => {
  const queryValues = [question_id];
  const queryString = `SELECT * FROM questions WHERE id = ?;`;
  return pool
    .promise()
    .query(queryString, queryValues)
    .then((result) => {
      return result[0];
    });
};

const selectRandomQuestions = () => {
  const queryString = `SELECT * FROM questions ORDER BY RAND() LIMIT 24;`;
  return pool
    .promise()
    .query(queryString)
    .then((result) => {
      return result[0];
    });
};

const selectAllAnswers = () => {
  const queryString = "SELECT * FROM answers";
  return pool
    .promise()
    .query(queryString)
    .then((result) => {
      return result[0];
    });
};

const selectAnswersByQuestionId = (question_id) => {
  const queryValues = [question_id];
  const queryString = `SELECT * FROM answers WHERE question_id = ?`;
  return pool
    .promise()
    .query(queryString, queryValues)
    .then((result) => {
      return result[0];
    });
};

module.exports = {
  selectAllQuestions,
  selectQuestionById,
  selectRandomQuestions,
  selectAllAnswers,
  selectAnswersByQuestionId,
};
