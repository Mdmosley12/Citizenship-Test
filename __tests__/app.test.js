const app = require("../app/index");
const request = require("supertest");
const { pool } = require("../dbConfig/connection");
const seed = require("../dbConfig/seed");
const testData = require("../dbConfig/testData/index");

beforeAll(() => {
  return seed(testData);
});

afterAll(() => {
  return pool.end();
});

describe("application testing", () => {
  describe("get questions", () => {
    test("Returns a 200 status code", () => {
      return request(app).get("/questions").expect(200);
    });
    test("Returns all questions", () => {
      return request(app)
        .get("/questions")
        .expect(200)
        .then(({ body: { questions } }) => {
          expect(questions.length).toBe(3);
        });
    });
    test("Returned questions contain all object keys", () => {
      return request(app)
        .get("/questions")
        .expect(200)
        .then(({ body: { questions } }) => {
          questions.forEach((question) => {
            expect(question).toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                question_text: expect.any(String),
              })
            );
          });
        });
    });
  });
  describe("get question by id", () => {
    test("Returns a 200 status code", () => {
      return request(app).get("/questions/1").expect(200);
    });
    test("Returns the requested question", () => {
      return request(app)
        .get("/questions/2")
        .expect(200)
        .then(({ body: { question } }) => {
          expect(question[0].id).toBe(2);
        });
    });
    test("Returned question contains all object keys", () => {
      return request(app)
        .get("/questions/3")
        .expect(200)
        .then(({ body: { question } }) => {
          question.forEach((question) => {
            expect(question).toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                question_text: expect.any(String),
              })
            );
          });
        });
    });
  });
  describe("get answers", () => {
    test("Returns a 200 status code", () => {
      return request(app).get("/answers").expect(200);
    });
    test("Returns all answers", () => {
      return request(app)
        .get("/answers")
        .expect(200)
        .then(({ body: { answers } }) => {
          expect(answers.length).toBe(9);
        });
    });
    test("Returned answers contain all object keys", () => {
      return request(app)
        .get("/answers")
        .expect(200)
        .then(({ body: { answers } }) => {
          answers.forEach((answer) => {
            expect(answer).toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                question_id: expect.any(Number),
                answer_text: expect.any(String),
                is_correct: expect.any(Number),
              })
            );
          });
        });
    });
  });
  describe("get answers by question id", () => {
    test("Returns a 200 status code", () => {
      return request(app).get("/answers/1").expect(200);
    });
    test("Returns all questions related to given question id", () => {
      return request(app)
        .get("/answers/2")
        .expect(200)
        .then(({ body: { answers } }) => {
          expect(answers.length).toBe(3);
        });
    });
    test("Returned answers contain all object keys", () => {
      return request(app)
        .get("/answers/3")
        .expect(200)
        .then(({ body: { answers } }) => {
          answers.forEach((answer) => {
            expect(answer).toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                question_id: expect.any(Number),
                answer_text: expect.any(String),
                is_correct: expect.any(Number),
              })
            );
          });
        });
    });
  });
});
