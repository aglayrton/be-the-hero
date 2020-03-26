//este será nosso arquivo de rotas
const express = require("express");
const routes = express.Router();
const ongsController = require('./controllers/OngsController');
const incidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/profile', profileController.index);
routes.post('/sessions', sessionController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

//exporta
module.exports = routes;