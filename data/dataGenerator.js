
const fs = require('fs')
const jsonStream = fs.createWriteStream('./products.json');
const makeImages = require('./randomImages.js');
const makeColors = require('./randomColors.js');
const getPrice = require('./randomPrice.js');
const getName = require('./randomName.js');
const getType = require('./randomType.js');


var i = 0;

function write() {
  var ok = true;
  do {
    i += 1;
    if (i % 1000000 === 0) {console.log(i, ' products saved')}
    var product = {
      item_id: i,
      productName: getName(),
      type: getType(),
      imageDefault: makeImages(1)[0],
      images: makeImages(6),
      colors: makeColors(),
      price: getPrice(),
      gallery: makeImages(4)
    }
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
