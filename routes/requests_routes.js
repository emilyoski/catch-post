const config = require('../helpers/config')
const express = require('express')
const logger = require('../helpers/logger')
const mongoose = require('mongoose')
const HTTPRequest = require('../models/requests')
const requestRouter = express.Router();

// ALL /:bin_id/requests   create new request (and record to db)
// requestRouter.all('/:bin_id/requests', (req, res) => {
//   const fullRequest = JSON.stringify(req);
//   const path = req.path;
//   const method = req.method;
//   const header = req.headers;
//   const body = req.body;
//   const binId = req.params.bin_id;

  // Create entry in MongoDB
  // Create entry in PostgreSQL
  // Send back the new entry or don't?
//   res.status(200);
// });

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  });

/*
requestRouter.post('/:bin_id/requests/:id', async (req, res) => {
  const request = new HTTPRequest({ 
    headers: req.headers,
    body: req.body.body,
    method: req.method,
    query: req.query,
    path: req.path,
    clientIP: req.ip
  });

  // ADD THE RETURNED OBJECT ID TO THE POSTGRES!
  request.save().then((returnedObject) => console.log(returnedObject.id));
})
*/



// GET /:bin_id/requests/:id
requestRouter.get('/:bin_id/requests/:id', async (req, res) => {
  const id = req.params.id;
  // get mongoId from Postgres

  let mongoId;
  let httpRequest = await HTTPRequest.findById(mongoId);
  if (httpRequest) {
    res.json(httpRequest);
  } else {
    res.status(404).end();
  }
});

// DELETE  /api/requests/:bin_id/:req_id
requestRouter.delete('/:bin_id/requests/:id', async (req, res) => {
  const id = req.params.id;
  // get mongoId from Postgres

  let mongoId;
  await HTTPRequest.findByIdAndRemove(mongoId);
  res.status(204).end();
});

// ? DELETE    /api/...?  - delete all requests
requestRouter.delete('/:bin_id/requests', async (req, res) => {
  const binId = req.params.bin_id;
  // Query PostgresQL database with binId for list of all requests
  // what is the type of the array elements?
  let allRequests = [];
  
  try {
    for (const requestId of allRequests) {
      await HTTPRequest.findByIdAndRemove(requestId)
    }
    res.status(204).end()
  } catch (error) {
    res.status(410).end()
  }
});


module.exports = requestRouter;