const express = require('express')
const requestController = require('../controllers/request-controllers');
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



// mongoose.connect(process.env.MONGODB_URI2);

// GET /:bin_id/requests
//requestRouter.get('/:bin_id/requests', requestController.getAllRequests);

// GET /:bin_id/requests/:id
requestRouter.get('/:bin_id/requests/:id', requestController.getRequest);

// DELETE  /api/requests/:bin_id/:req_id
requestRouter.delete('/:bin_id/requests/:id', requestController.deleteRequest);

// ? DELETE    /api/...?  - delete all requests
requestRouter.delete('/:bin_id/requests/', requestController.deleteAllRequests);


module.exports = requestRouter;