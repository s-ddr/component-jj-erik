const dbHelpers = require('../database/dbHelpers.js');
const makeProduct = require('../data/makeProduct.js');
const cache = require('redis').createClient();


const compareKeys = (a, b) => {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

const get = (req, res) => {
  const id = req.params.id
  dbHelpers.get(id)
    .then((data) => {
      cache.setex(id, 3000, JSON.stringify(data));
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}

const getByName = (req, res) => {
  dbHelpers.get100ByName(req.query.name)
  .then((data) => {
    cache.setex(req.query.name, 3000, JSON.stringify(data));
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(404).send(err);
  })
}

const getIdCached = (req, res) => {
  cache.get(req.params.id, (err, result) => {
    if (result) {
      res.status(200).send(JSON.parse(result));
    } else {
      get(req, res);
    }
  });
}

const getNameCached = (req, res) => {
  cache.get(req.query.name, (err, result) => {
    if (result) {
      res.status(200).send(JSON.parse(result));
    } else {
      getByName(req, res);
    }
  });
}

const post = (req, res) => {
  var randomObj = makeProduct('mongo');
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

module.exports = { getIdCached, getNameCached, remove, put, post };