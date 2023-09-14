const express = require('express')
const binRouter = express.Router();

const binController = require('../controllers/bin-controllers');

// bin api related routes:
binRouter.post('/', binController.createBin);

binRouter.get('/', binController.getAllBins);

binRouter.get('/:bin_id', binController.getBin);

binRouter.delete('/:bin_id', binController.deleteBin);


module.exports = binRouter;