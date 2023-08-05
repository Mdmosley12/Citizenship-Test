const testData = require("../dbConfig/testData/index");
const devData = require("../dbConfig/devData");
const seed = require("./seed");
const { pool } = require("./connection");

const runSeed = () => {
  return seed(devData).then(() => {
    pool.end();
  });
};

runSeed();
