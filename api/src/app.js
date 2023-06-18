const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./routes');
const cors = require('cors');
require('dotenv').config();
app.use(cors());

app.use(bodyParser.json());

//toutes les routes qui commencent par /api/v1 seront cherchées dans apiRouter
app.use('/api/v1', apiRouter);

app.listen(process.env.SERVER_PORT, function () {
  console.log('le server suez-backend est lancé');
});
