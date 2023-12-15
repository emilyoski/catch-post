const filteroutIds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].id;
  }
  return arr
}

module.exports = filteroutIds;