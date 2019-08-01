const Product = require('./index.js');

const get = (item_id) => {
  return Product.find({ item_id }).limit(1)
}

const get100ByName = (name) => {
  return Product.find( { $text: { $search: name}}).limit(24)
}

const remove = (item_id) => {
  return Product.deleteOne({item_id})
}

const update = (item_id, newObj) => {
  return Product.findOneAndUpdate({item_id}, newObj)
}

const insert = (newObj) => {
 return Product.findOne({}).sort({item_id: -1}).limit(1)
    .then((obj) => {
      newObj.item_id = obj.item_id + 1;
      return Product.create(newObj);
    })
}

module.exports = { get, remove, update, insert, get100ByName};