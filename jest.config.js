// For Jest, ignore jpeg, gif, png or css imports in js/jsx files.

module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/import-stub.js',
    '\\.(jpg|gif|png)$': '<rootDir>/test/import-stub.js'
  }
};
