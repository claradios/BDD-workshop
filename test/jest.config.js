module.exports = {
  verbose: true,
  rootDir: '../',
  testMatch: [
    '<rootDir>/test/unit/**/*.test.js',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/js/**/*.js',
  ],
  coverageDirectory: '<rootDir>/test/reports/coverage',
  coverageReporters: ['json', 'lcov', 'text'],
  cacheDirectory: 'test/unit/jestcache',
};
