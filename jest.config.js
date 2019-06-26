module.exports = {
  setupFiles: ["<rootDir>/setupTests.js"],
  transform: {
    ".*": "<rootDir>/node_modules/babel-jest"
  },
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    "^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS)$": "EmptyModule"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  unmockedModulePathPatterns: [
    "<rootDir>/node_modules/react",
    "<rootDir>/node_modules/react-dom",
    "<rootDir>/node_modules/react-addons-test-utils",
    "<rootDir>/EmptyModule.js"
  ],
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coveragePathIgnorePatterns: ["<rootDir>/__test__/", "<rootDir>/node_modules/"]
};
