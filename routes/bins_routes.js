const genRanHex = require("../helpers/generate_hex");
const express = require('express')
const binRouter = express.Router();

const binController = require('../controllers/bin-controllers');

// create a bin 
binRouter.post('/', (req, res) => {   // sanitize name!!!
  // SANITIZE NAME! name -> variable from frontend
  let nameOfBin = req.body.name;
  let url = genRanHex(8);    // consider checking uniqness
  // validate url & name
  // save if valid
  
  // enter url into the postgres db
  let newBin = {
    urlPath: url,
    nickname: nameOfBin
  }

  let finishedBin = binController.createBin(newBin);
  console.log(finishedBin);

  res.redirect(`/api/bin/${url}`);
});

// get a bin
binRouter.get('/:bin_id', (req, res) => {
  let binId = req.params.bin_id;   // req.params.bin_id

  /*
  retrieve the requests from postgres

  nil -> 
  will be dependent on how the postgres connection we use return no requests

  if requests == nil {
    res.status(404).end()
  } else {
    let jsonRequests = JSON.stringify({ requests })
    res.json(jsonRequests)
  }
  */
});

// delete a bin
binRouter.delete('/:bin_id', (req, res) => {
  let binId = req.params.bin_id;

  /*
  // delete the request - database controller should return boolean
  // let deletionSuccessful = databaseThings()

  if deletionSuccessful {
    res.status(200).end()
  } else {
    res.status(404).end()
  }
  */
});

module.exports = binRouter;