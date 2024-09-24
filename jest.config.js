module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/test/app.test.js"],
  testEnvironment: "node",
  testTimeout: 10000,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
