module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
};
