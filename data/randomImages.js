const imageUrls = [
  "http://www.buffalo.edu/content/www/brand/creative/color/color-palette/_jcr_content/par/image.img.292.auto.jpg/1458595285128.jpg",
  "http://edleuro.com/wp-content/uploads/2014/04/ESF-6438T-Orange-Red.jpg",
  "https://www.economist.com/sites/default/files/imagecache/1280-width/images/2014/06/blogs/babbage/20140628_stp501.jpg",
  "https://www.chelsea-fusion.com/wp-content/uploads/2015/02/Diamond-Decor-Colour-Coated-Glass-Lemon-Yellow.jpg",
  "https://www.skateism.com/wp-content/uploads/2019/02/orange.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-p/13/81/eb/d7/indigo-blue.jpg"
]

module.exports = (min) => {
  let amount = Math.floor(Math.random() * Math.floor(3)) + min;
  let images = [];
  for (var i = 0; i < amount; i++) {
    let index = Math.floor(Math.random() * Math.floor(5))
    images.push(imageUrls[index]);
  }
  return images;
}

