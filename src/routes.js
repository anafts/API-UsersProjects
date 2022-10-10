const express = require('express');
const ProjectsCrontroller = require('./controllers/ProjectsCrontroller');

const routes = express.Router();

const UserController = require('./controllers/UserController');

// users routes
routes.get('/users', UserController.select);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// 
routes.get('/projects', ProjectsCrontroller.select);

module.exports = routes;