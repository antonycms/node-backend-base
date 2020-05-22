require('dotenv').config();

const Express = require('express');
const routes = require('./routes');
// const { resolve } = require('path');

// database connect
require('./database');

class App {
  constructor() {
    this.server = Express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Express.json());
    // this.server.use(Express.static(resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
