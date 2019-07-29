const makeImages = require('./randomImages.js');
const makeColors = require('./randomColors.js');
const getPrice = require('./randomPrice.js');
const getName = require('./randomName.js');
const getType = require('./randomType.js');

module.exports = (db, i) => {
  if (db === 'mongo') {
    return {
      item_id: i,
      productName: getName(),
      type: getType(),
      imageDefault: makeImages(1)[0],
      images: makeImages(6),
      colors: makeColors(),
      price: getPrice(),
      gallery: makeImages(4)
    }
  } else if (db === 'pg') {
    return `${i},${getName()},${(Math.floor(Math.random() * 128)) + 1},${makeImages(1)[0]},${getPrice()}\n`
  }
}



// product: getName(),
// type: Math.floor(Math.random() * 130),
// imageDefault: makeImages(1)[0],
// price: getPrice(),