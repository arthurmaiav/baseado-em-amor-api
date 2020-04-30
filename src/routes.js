const express = require('express');

const CaseController = require('./controllers/CaseController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

routes.get('/cases', CaseController.index);
routes.post('/cases', CaseController.create);
routes.delete('/cases/:id', CaseController.delete);

module.exports = routes;