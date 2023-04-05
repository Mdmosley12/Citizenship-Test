const testData = require("../dbConfig/testData/index");
const seed = require("./seed");
const { pool } = require("./connection");

const runSeed = () => {
  return seed(testData).then(() => {
    pool.end();
  });
};

runSeed();
