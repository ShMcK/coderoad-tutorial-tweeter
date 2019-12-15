/* 
Config is overwritten for the CodeRoad integration
because of the need to change the Jest reporter on tests.
See the README for details on how to revert back.
*/

module.exports = {
  webpack: config => {
    return config;
  },
  devServer: config => {
    return config;
  },
  jest: config => ({
    ...config,
    // stop running tests after `n` failures
    bail: 1,
    // use jest-tap-reporter with CodeRoad tests
    reporters: ["jest-tap-reporter"],
    // disable test coverage collection for performance
    collectCoverage: false,
    collectCoverageFrom: [],
    // add a test setup file if need
    setupFilesAfterEnv: ["./src/tests/setupTests.js"],
    // unused fields with CodeRoad
    watchPlugins: []
  }),
  paths(paths, env) {
    return paths;
  }
};
