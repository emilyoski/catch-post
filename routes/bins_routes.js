const genRanHex = require("../helpers/generate_hex");
const express = require('express')
const binRouter = express.Router();

// create a bin 
binRouter.post('/', (req, res) => {
  // enter url into the postgres db
  let url = genRanHex()
  res.send('<h1>Hello World</h1>');
});

// delete a bin
binRouter.get('/bin', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

module.exports = binRouter;