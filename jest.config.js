/**
 * Jest configuration
 */
module.exports = {
  setupFiles: ['./src/setupTests.js'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
