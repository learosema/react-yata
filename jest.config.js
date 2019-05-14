// For Jest, ignore jpeg, gif, png or css imports in js/jsx files.

module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/_mocks/import-stub.js',
    '\\.(jpg|gif|png)$': '<rootDir>/_mocks/import-stub.js'
  }
};
