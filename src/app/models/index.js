const requireDirectory = require('require-directory');


const management = Object.values(requireDirectory(module, './management'));

const models = [
  ...management,
];

module.exports = models;
