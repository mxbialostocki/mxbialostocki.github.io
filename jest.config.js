module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`
  },
  moduleNameMapper: {
    "^.+\\.css$": `identity-obj-proxy`,
    "^.+\\.(jpg|jpeg|png|gif|ttf|woff|woff2|svg)$": `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`
  ],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/loadershim.js`
  ]
}