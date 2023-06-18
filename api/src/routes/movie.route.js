const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// GET http://localhost:5432/api/v1/movie/getMovie

/**
 * cette route permet de récupérer les films de la page demandée depuis l'API de themoviedb
 * elle utilise le controlleur getMovie de movie.controller.js
 * elle prend en paramètre le numéro de la page coté backend
 */
router.get('/getMovie/:page', movieController.getMovie);

module.exports = router;
