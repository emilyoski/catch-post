const genRanHex = require("../helpers/generate_hex");
const client = require("../config/postgres");
const HTTPRequest = require('../models/requests')

const getRequestSQL = `SELECT * FROM requests WHERE ui_id = $1`;
const getBinRequestsSQL = `SELECT * FROM requests WHERE bin_id = $1`;
const deleteRequestSQL = `DELETE FROM requests WHERE ui_id = $1`;
const deleteAllRequestsSQL = `DELETE FROM requests WHERE url_path = $1`;
const getBinIdByPathSQL = `SELECT * FROM bins WHERE url_path = $1`;
const createRequestSQL = `INSERT INTO requests
                          (http_method, http_path, mongo_id, ui_id, bin_id)
                          VALUES
                          ($1, $2, $3, $4, $5);`

const createRequest = async (req, res) => {
  try {
    // Create MongoDB document
    const request = new HTTPRequest({ 
      headers: req.headers,
      body: req.body,
      method: req.method,
      query: req.query,
      path: req.path,
      clientIP: req.ip
    });
    const newRequest = await request.save();
    
    // Add to PostgreSQL
    const result = await client.query(getBinIdByPathSQL, [req.params.url_path]);
    const ui_id = genRanHex(8);
    console.log(ui_id);
    const params = [newRequest.method, newRequest.path, newRequest.id, ui_id, result.rows[0].id];
    await client.query(createRequestSQL, params);

    res.status(200).json({msg: "Request was successfully received."});
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured. (error from req controller'});
  }
}

const getRequest = async (req, res) => {
  try {
    const result = await client.query(getRequestSQL, [req.params.id])
    const mongoId = result.rows[0].mongo_id;
    const httpRequest = await HTTPRequest.findById(mongoId);
    res.json(httpRequest);
  } catch {
    res.status(404).end();
  }
}

const getAllRequests = async (req, res) => {
  const urlPath = req.params.bin_id;
  const validUrlPath = /^[a-z0-9]{8}$/i.test(urlPath);
  if (!validUrlPath) {
    res.status(404).json({msg: `Bin with id ${urlPath} does not exist.`})
  }

  try {
    const binResult = await client.query('SELECT * FROM bins WHERE url_path = $1', [urlPath]);
    const binId = binResult.rows[0].id;
    const requestsResult = await client.query(getBinRequestsSQL, [binId]);
    res.json({requests: requestsResult.rows}); 
  } catch {
    res.status(404).json({msg: "This bin does not exist."});
  }
}

const deleteRequest = async (req, res) => {
  try {
    const result = await client.query(getRequestSQL, [req.params.id]);
    const mongoId = result.rows[0].mongo_id;

    await client.query(deleteRequestSQL, [req.params.id]);
    await HTTPRequest.findByIdAndRemove(mongoId);
    res.status(204).end();
  } catch {
    res.status(410).end();
  }
}

// Not working
const deleteAllRequests = async (req, res) => {
  try {
    const urlPath = req.params.bin_id;
    const binResult = await client.query('SELECT * FROM bins WHERE url_path = $1', [urlPath]);
    const binId = binResult.rows[0].id;

    const result = await client.query(getBinRequestsSQL, [binId]);
    const mongoIds = result.rows.map(({mongo_id}) => mongo_id);
    // for (const mongoId of mongoIds) {
    //   await HTTPRequest.findByIdAndRemove(mongoId)
    // }
    console.log("!")
    console.log(req.params.bin_id);
    // await client.query(deleteAllRequestsSQL, [req.params.bin_id]);
    res.status(204).end();
  } catch {
    res.status(410).end();
  }
}

module.exports = {
  createRequest,
  getRequest,
  getAllRequests,
  deleteRequest,
  deleteAllRequests
}