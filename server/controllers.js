const dbHelpers = require('../database/dbHelpers.js');
const makeProduct = require('../data/makeProduct.js');


const compareKeys = (a, b) => {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  console.log(aKeys);
  console.log(bKeys);
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

const get = (req, res) => {
  const id = req.params.id
  dbHelpers.get(id)
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(404);
    })
}

const post = (req, res) => {
  var randomObj = makeProduct();
  var object = compareKeys(req.body, randomObj) ? req.body : randomObj;
  dbHelpers.insert(object)
  .then((response) => {
    res.status(201).send(response);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
}

const put = (req, res) => {
  dbHelpers.update(req.params.id, req.body)
    .then((response) => {
      res.status(200).send(`updated id ${req.params.id}`);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}

const remove = (req, res) => {
  dbHelpers.remove(req.params.id)
    .then((response) => {
      res.status(200).send(`deleted id ${req.params.id}`)
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}

module.exports = { get, remove, put, post };