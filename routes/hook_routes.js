const express = require('express')
const hookRouter = express.Router();

const requestController = require('../controllers/request-controllers');

hookRouter.all('/:url_path', requestController.createRequest);

module.exports = hookRouter; 