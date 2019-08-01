// UNCOMMENT ONCE KEY IS ADDED 
require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')
const router = require('./router.js');
const cluster = require('cluster');
const numCpus = require('os').cpus().length;


const app = express();
const port = 3003;


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use('/api', router);

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
