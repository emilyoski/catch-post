

let count = 1;
let fakeBins = [
  {
    id: 0,
    urlPath: "/testurl",
    nickname: "best bin ever",
    created: "09-12-23",  // making it Date obj?
  }
];

const createBin = (newBin) => {
  count++;
  newBin.id = count;
  newBin.created = "09-12-23";
  fakeBins.push(newBin)
  return newBin
};

exports.createBin = createBin;