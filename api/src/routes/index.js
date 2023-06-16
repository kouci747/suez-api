const express = require('express');
const router = express.Router();

const movieRouter = require('./movie.route');

router.use('/movie', movieRouter);

module.exports = router;
