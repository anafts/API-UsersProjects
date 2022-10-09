const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');


routes.get('/users', UserController.select);
routes.post('/users', UserController.create);

module.exports = routes;