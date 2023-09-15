// from bins
const express = require('express')
const recordsRouter = express.Router();

const binController = require('../controllers/bin-controllers');
const requestController = require('../controllers/request-controllers');

// requests routing
recordsRouter.get('/bins/:bin_id/requests', requestController.getAllRequests);
recordsRouter.get('/bins/:bin_id/requests/:id', requestController.getRequest);
recordsRouter.delete('/bins/:bin_id/requests/:id', requestController.deleteRequest);
// recordsRouter.delete('/bins/:bin_id/requests/', requestController.deleteAllRequests);


// bin api related routes:
recordsRouter.get('/:bin_id', binController.getBin);
recordsRouter.delete('/:bin_id', binController.deleteBin);
recordsRouter.post('/', binController.createBin);
recordsRouter.get('/', binController.getAllBins);


module.exports = recordsRouter; 