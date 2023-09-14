const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  body: Object,
  headers: Object,
  method: String,
  query: Object,
  path: String,
  clientIP: String
});

requestSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  }
});

module.exports = mongoose.model('HTTPRequest', requestSchema);