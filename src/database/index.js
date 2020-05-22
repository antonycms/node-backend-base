const Sequelize = require('sequelize');
const sequelizeConfig = require('~root/config/database');

const models = require('~root/app/models');

class Database {
  constructor() {
    this.connection = new Sequelize(sequelizeConfig);

    this.initModels();
    this.checkConnection();
  }

  initModels() {
    models.map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }

  checkConnection() {
    this.connection.authenticate()
      .then(() => {
        console.log('Connection has been established');
      })
      .catch((err) => {
        console.error('Unable to connect to the database: ', err.message);
      });
  }
}

module.exports = new Database();
