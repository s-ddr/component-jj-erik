const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')
const router = require('./router.js');

const app = express();
const port = 3003;

app.get('*.js.gz', (req, res, next) => {
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))