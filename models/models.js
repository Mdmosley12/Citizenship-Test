const db = require("../dbConfig/connection");

const selectAllQuestions = () => {
  const queryString = "SELECT * FROM questions;";
  return db
    .promise()
    .query(queryString)
    .then((result) => {
      return result[0];
    });
};

const selectQuestionById = (question_id) => {
  const queryValues = [question_id];
  const queryString = `SELECT * FROM questions WHERE id = ?`;
  return db
    .promise()
    .query(queryString, queryValues)
    .then((result) => {
      return result[0];
    });
};

const selectAllAnswers = () => {
  const queryString = "SELECT * FROM answers";
  return db
    .promise()
    .query(queryString)
    .then((result) => {
      return result[0];
    });
};

module.exports = { selectAllQuestions, selectQuestionById, selectAllAnswers };
