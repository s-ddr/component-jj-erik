require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')
const router = require('./router.js');
const cluster = require('cluster');
const numCpus = require('os').cpus().length;
const headers = require('./headers.js');


const app = express();
const port = 3003;


app.use(headers);
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use('/api', router);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  //Check if work id is died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  // This is Workers can share any TCP connection
  // It will be initialized using express
  console.log(`Worker ${process.pid} started`);

  app.get('/cluster', (req, res) => {
    let worker = cluster.worker.id;
    res.send(`Running on worker with id ==> ${worker}`);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
