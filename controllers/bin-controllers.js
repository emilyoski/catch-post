const genRanHex = require("../helpers/generate_hex");
// const filteroutIds = require("../helpers/filterout_id"); // code debt - filtering out all pg ids before sending to data to client
const client = require("../config/postgres");

const createBin = async (req, res) => {
  let urlPath = genRanHex(8);

  try {
    await client.query('INSERT INTO bins (url_path) VALUES ($1);', [urlPath]);
    res.status(200).json({ binUrl: urlPath });
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }
}

const getBin = async (req, res) => {
  let binId = req.params.bin_id;
  
  const validBinId = /^[a-z0-9]{8}$/i.test(binId);
  if (!validBinId) {
    res.status(404).json({msg: `Bin with id ${binId} does not exist.`})
  }

  let foundBin;
  try {
    let result = await client.query('SELECT * FROM bins WHERE url_path = $1', [binId]);
    foundBin = result.rows[0];

    res.status(200).json({ bin: foundBin }); // code debt: if bin dous not exist, return error instead of empty object
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }
};

const getAllBins = async (req, res) => {
  let allBins;
  try {
    let result = await client.query('SELECT * FROM bins');
    allBins = result.rows;
    res.status(200).json({ bin: allBins });
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }
};

const deleteBin = async (req, res) => {
  let binId = req.params.bin_id;

  const validBinId = /^[a-z0-9]{8}$/i.test(binId);
  if (!validBinId) {
    res.status(404).json({msg: `Bin with id ${binId} does not exist.`})
  }

  try {
    await client.query('DELETE FROM bins WHERE url_path = $1', [binId]);
    res.status(200).json({ msg: `Bin with id ${binId} is successfully deleted.`}); // code debt: if bin does not exist, return error instead of successful msg
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured. Bin was not deleted'});
    console.log("Error occurred");
  }
};


exports.createBin = createBin;
exports.getBin = getBin;
exports.deleteBin = deleteBin;
exports.getAllBins = getAllBins;

