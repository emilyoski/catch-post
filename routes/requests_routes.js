const express = require('express')
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

// GET /:bin_id/requests/:id
requestRouter.get('/:bin_id/requests/:id', (req, res) => {
  const mongoId = req.params.id;

  // Query mongo database with mongoId
  // Error handling
  // Assign requestData
  res.json(requestData);
});

// DELETE  /api/requests/:bin_id/:req_id
requestRouter.delete('/:bin_id/requests/:id', (req, res) => {
  const mongoId = req.params.id;

  // Query mongo database with mongoId to delete record
  // Error handling
  res.status(204).end()
});

// ? DELETE    /api/...?  - delete all requests
requestRouter.delete('/:bin_id/requests', (req, res) => {
  const binId = req.params.bin_id;

  // Error handling
  // Query PostgresQL database with binId for list of all requests
  let allRequests = [];
  // Iterate through all requests and delete them
  res.status(204).end()
});


module.exports = requestRouter;