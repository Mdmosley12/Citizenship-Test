const { pool } = require("./connection");

require("dotenv").config();

const seed = ({ questionsData, answersData }) => {
  const questionIdMap = {};

  return pool
    .promise()
    .query(`DROP TABLE IF EXISTS answers;`)
    .then(() => {
      return pool.promise().query(`DROP TABLE IF EXISTS questions;`);
    })
    .then(() => {
      const questionsTablePromise = pool.promise().query(`
      CREATE TABLE questions (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        question_text TEXT NOT NULL
        );`);

      const answersTablePromise = pool.promise().query(`
        CREATE TABLE answers (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          question_id INT NOT NULL,
          answer_text TEXT NOT NULL,
          is_correct BOOLEAN NOT NULL
          );`);

      return Promise.all([questionsTablePromise, answersTablePromise]);
    })
    .then(() => {
      const insertQuestionsQueryStr = questionsData.map((question, index) => {
        return pool
          .promise()
          .query(`INSERT INTO questions (question_text) VALUES (?)`, [
            question.question_text,
          ])
          .then((result) => {
            questionIdMap[index] = result[0].insertId;
          });
      });

      return Promise.all(insertQuestionsQueryStr);
    })
    .then(() => {
      const insertAnswersQueryStr = answersData.map((answer) => {
        return pool.promise().query(
          `
          INSERT INTO answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)`,
          [
            questionIdMap[answer.question_id],
            answer.answer_text,
            answer.is_correct,
          ]
        );
      });

      return Promise.all(insertAnswersQueryStr);
    });
};

module.exports = seed;
