const Router = require('express').Router();

const UserController = require('~root/app/controllers/management/UserController');
const UserStoreValidator = require('~root/app/validators/management/user/StoreValidator');
const UserUpdateValidator = require('~root/app/validators/management/user/UpdateValidator');
const UserDeleteValidator = require('~root/app/validators/management/user/DeleteValidator');

Router.get('/users', UserController.index);
Router.get('/users/:id', UserController.index); // find user by id
Router.post('/users', UserStoreValidator, UserController.store);
Router.put('/users', UserUpdateValidator, UserController.update);
Router.delete('/users', UserDeleteValidator, UserController.delete);

module.exports = Router;
