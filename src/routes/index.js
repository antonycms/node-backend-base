const requireDirectory = require('require-directory');


const auth = Object.values(requireDirectory(module, './auth'));
const management = Object.values(requireDirectory(module, './management'));

const routes = [
  ...auth,
  ...management,
];

module.exports = routes;
