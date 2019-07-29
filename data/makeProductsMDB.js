
const fs = require('fs')
const jsonStream = fs.createWriteStream('./products.json');
const makeProduct = require('./makeProduct.js');

var i = 0;

function write() {
  var ok = true;
  do {
    i += 1;
    if (i % 1000000 === 0) {console.log(i, ' products saved')}
    var product = makeProduct('mongo', i);
    if (i === 10000000) {
      jsonStream.write(JSON.stringify(product), 'utf8', () => {jsonStream.end()});
    } else {
      ok = jsonStream.write(JSON.stringify(product), 'utf8');
    }
  } while (i <= 10000000 && ok);
  if (i > 0) {
    jsonStream.once('drain', write);
  }
}

write();
