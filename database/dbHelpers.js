const Product = require('./index.js');

const get = (item_id) => {
  return Product.find({ item_id });
}

module.exports = { get };