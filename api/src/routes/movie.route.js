const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// GET http://localhost:5432/api/v1/movie/getMovie
router.get('/getMovie/:page', movieController.getMovie);

module.exports = router;
