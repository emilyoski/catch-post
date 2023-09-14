const genRanHex = require("../helpers/generate_hex");
const client = require("../config/postgres");
let count = 0;
let fakeBins = [
  {
    id: 0,
    urlPath: "cf3df84e",
  }
];

const createBin = async (req, res) => {
  let urlPath = genRanHex(8);
  try {
    await client.query('INSERT INTO bins (url_path) VALUES ($1);', [urlPath]);
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }
  res.status(200).json({ binUrl: urlPath });
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
    await client.end()
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }
  
  // return bin info - need to remove pg Pk id
  res.status(200).json({ bin: foundBin });
};

const getAllBins = async (req, res) => {
  let allBins;
  try {
    let result = await client.query('SELECT * FROM bins');
    allBins = result.rows;
    await client.end()
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
  }

  // console.log(allBins);
  
  // return bin info - need to remove pg Pk id
  res.status(200).json({ bin: allBins });
};

const deleteBin = async (req, res) => {
  let binId = req.params.bin_id;

  const validBinId = /^[a-z0-9]{8}$/i.test(binId);
  if (!validBinId) {
    res.status(404).json({msg: `Bin with id ${binId} does not exist.`})
  }

  // try deleting bin from pg
  try {
    await client.query('DELETE FROM bins WHERE url_path = $1', [binId]);
    await client.end();
  } catch (err) {
    res.status(500).json({msg: 'An unknown error occured.'});
    console.log("Error occurred");
  }

  // console.log("Bin deleted");
  res.status(200).json({ msg: `Bin with id ${binId} is successfully deleted.`});
};


exports.createBin = createBin;
exports.getBin = getBin;
exports.deleteBin = deleteBin;
exports.getAllBins = getAllBins;

