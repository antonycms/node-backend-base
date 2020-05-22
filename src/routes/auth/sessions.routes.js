const Router = require('express').Router();

// controllers
const SessionController = require('~root/app/controllers/auth/SessionController');
const SessionStoreValidator = require('~root/app/validators/auth/sessions/StoreValidator');
const auth = require('../../app/middlewares/auth');

// validators

Router.post('/sessions/store', SessionStoreValidator, SessionController.store);

// Active private routes
Router.use(auth);

module.exports = Router;
