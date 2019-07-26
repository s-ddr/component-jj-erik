const makeImages = require('./randomImages.js');
const makeColors = require('./randomColors.js');
const getPrice = require('./randomPrice.js');
const getName = require('./randomName.js');
const getType = require('./randomType.js');

module.exports = () => {
  return {
    productName: getName(),
    type: getType(),
    imageDefault: makeImages(1)[0],
    images: makeImages(6),
    colors: makeColors(),
    price: getPrice(),
    gallery: makeImages(4)
  }
}