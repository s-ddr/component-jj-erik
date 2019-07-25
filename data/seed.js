const mongoose = require('mongoose');
const Product = require('../database/index.js');

const data = 
[
  {																													
    "item_id": 0,																													
    "productName":"auburn chair",																													
    "type": "Living Room Chairs",																												
    "imageDefault": "http://carousel-we.s3-us-west-1.amazonaws.com/00/00.jpg",																													
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/00/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/08.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/09.jpg", 
      "http://carousel-we.s3-us-west-1.amazonaws.com/00/10.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/11.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/12.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/13.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/14.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/15.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/16.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/00/17.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/00/18.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/00/20.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/00/21.jpg"],																													
    "colors": [{"name":"Twill, Black Indigo", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/00/black-indigo.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/00/black-indigo-image.jpg"},{"name":"Distressed Velvet, Light Pink", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/00/pink.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/00/pink-image.jpg"},{"name":"Twill, Platinum", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/00/plat.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/00/plat-image.jpg"},{"name":"Distressed Velvet, Olive", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/00/olive.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/00/olive-image.jpg"}],																													
    "price":349,																													
    "gallery": [ "https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"],																													
  },
  {
    "item_id": 1,
    "productName": "viv swivel chair",
    "type": "Living Room Chairs",
    "imageDefault": `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-00-default.jpg`,
    "images": [`http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-00-default.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-01.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-02.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-03.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-04.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-05.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-06.jpg`, 
    `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-07.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-08.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-09.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-11.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-12.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-13.jpg`, `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-14.jpg` ],
    "colors": [ {"name": "Distressed Velvet, Light Pink", "url": `http://carousel-we.s3-us-west-1.amazonaws.com/01/pink-witem_ide.jpg` , "image": `http://carousel-we.s3-us-west-1.amazonaws.com/01/pink-image.jpg` }, {"name": "Distressed Velvet, Light Taupe" , "url": `http://carousel-we.s3-us-west-1.amazonaws.com/01/taupe-witem_ide.jpg` , "image": `http://carousel-we.s3-us-west-1.amazonaws.com/01/taupe-image.jpg` }, {"name": "Luxe Boucle, White" , "url": `http://carousel-we.s3-us-west-1.amazonaws.com/01/white-witem_ide.jpg` , "image": `http://carousel-we.s3-us-west-1.amazonaws.com/01/white-image.jpg` } ],
    "price": 699,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg" ],
 },
 {
    "item_id":2,
    "productName":"Andes Terminal Chaise Sectional",
    "type": "Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/02/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/02/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/07.jpg"],
    "colors": [{"name":"Performance Velvet, Ink Blue", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/02/blue.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/02/blue-image.jpg"},{"name":"Distressed Velvet, Mineral Gray ", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/02/gray.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/02/gray-image.jpg"},{"name":"Worn Velvet, Metal", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/02/metal.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/02/metal-image.jpg"},{"name":"Twill, Stone", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/02/stone.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/02/stone-image.jpg"}],
    "price":2898,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/02/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/gallery4.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/02/gallery5.jpg"]
  },
  {
    "item_id":3,
    "productName":"Ryder Leather Chair",
    "type": "Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/03/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/03/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/07.jpg"],
    "colors": [{"name":"Saddle", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/03/saddle-leather.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/03/saddle-leather-image.jpg"}],
    "price":999,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":4,
    "productName":"Ruby Slipper Chair",
    "type": "Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/04/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/04/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/07.jpg"],
    "colors": [{"name":"Twill, Black Indigo", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/04/blackindigo.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/04/blackindigo-image.jpg"},{"name":"Heathered Crosshatch, Feather Gray", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/04/feathergray.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/04/feathergray-image.jpg"}],
    "price":299,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":5,
    "productName":"Silhouette Pedestal Dining Table",
    "type": "Dining Room Tables",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/05/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/05/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/07.jpg"],
    "colors": [{"name":"Antique Brass", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/05/AntiqueBrass.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/05/AntiqueBrass-image.jpg"},{"name":"Brushed Nickel", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/05/BrushedNickel.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/05/BrushedNickel-image.jpg"}],
    "price":299,
    gallery: ["http://carousel-we.s3-us-west-1.amazonaws.com/05/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/gallery4.jpg"]
  },
  {
    "item_id":6,
    "productName":"Mitem_id-Century Leather Show Wood Chair",
    "type":"Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/06/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/06/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/08.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/09.jpg"],
    "colors": [{"name":"Saddle Leather/Espresso", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/06/saddle.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/06/saddle-image.jpg"},{"name":"Nero Leather/Pecan", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/06/nero.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/06/nero-image.jpg"}],
    "price":999,
    gallery: ["http://carousel-we.s3-us-west-1.amazonaws.com/06/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/gallery4.jpg"]
  },
  {
    "item_id":7,
    "productName":"Carlo Leather Mitem_id-Century Chair",
    "type":"Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/07/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/07/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/08.jpg"],
    "colors": [{"name":"Aspen Leather, Aegean", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/07/aegean.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/07/aegean-image.jpg"},{"name":"Aspen Leather, Fog", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/07/fog.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/07/fog-image.jpg"},{"name":"Heritage Leather, Verdant", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/07/verdant.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/07/verdant-image.jpg"},{"name":"Leather, Saddle", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/07/saddle.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/07/saddle-image.jpg"}],
    "price":999,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/07/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/gallery4.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/gallery5.jpg"]
  },
  {
    "item_id":8,
    "productName":"Cozy Swivel Chair",
    "type":"Living Room Chairs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/08/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/08/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/07.jpg"],
    "colors": [{"name":"Chunky Melange, Frost Gray", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/08/frostGray.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/08/frostGray-image.jpg"},{"name":"Chunky Melange, Charcoal", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/08/charcoal.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/08/charcoal-image.jpg"}],
    "price":640,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/08/gallery1.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/08/gallery2.jpeg","http://carousel-we.s3-us-west-1.amazonaws.com/08/gallery3.jpeg","http://carousel-we.s3-us-west-1.amazonaws.com/08/gallery4.jpeg"]
  },
  {
    "item_id":9,
    "productName":"Tripod Dining Table",
    "type":"Dining Room Tables",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/09/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/09/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/09/07.jpg"],
    "colors": [{"name":"Walnut", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/09/walnut.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/09/walnut-image.jpg"},{"name":"White Lacquer", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/09/whitelacquer.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/09/whitelacquer-image.jpg"}],
    "price":249,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/09/gallery1.jpeg","http://carousel-we.s3-us-west-1.amazonaws.com/09/gallery2.jpeg","http://carousel-we.s3-us-west-1.amazonaws.com/09/gallery3.jpeg","http://carousel-we.s3-us-west-1.amazonaws.com/09/gallery4.jpeg"]
  },
  {
    "item_id":10,
    "productName":"Tripod Dining Table",
    "type":"Sofas",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/10/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/10/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/slate-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/10/gravel-image.jpg"],
    "colors": [{"name":"Twill, Gravel", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/10/gravel.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/10/gravel-image.jpg"},{"name":"Chenille Tweed, Slate", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/10/slate.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/10/slate-image.jpg"}],
    "price":2898,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":11,
    "productName":  "Streamline Bookshelf - Whitewashed Mango Wood",
    "type":"Bookshelfs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/11/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/11/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/antiquebronze-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/11/lightbronze-image.jpg"],
    "colors": [{"name":"Antique Bronze", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/11/antiquebronze.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/11/antiquebronze-image.jpg"},{"name":"Light Bronze", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/11/lightbronze.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/11/lightbronze-image.jpg"}],
    "price":599,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":12,
    "productName":"Industrial Storage Pop-Up Coffee Table",
    "type":"Coffee Tables",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/12/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/12/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/cafe-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/rawmango-image.jpg"],
    "colors": [{"name":"Café", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/12/cafe.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/12/cafe-image.jpg"},{"name":"Raw Mango", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/12/rawmango.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/12/rawmango-image.jpg"}],
    "price":599,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/12/gallery1.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/gallery2.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/gallery3.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/12/gallery4.jpg"]
  },
  {
    "item_id":13,
    "productName":"Delphine Buffet",
    "type":"Kitchen Furniture",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/13/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/13/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/08.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/espresso-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/feathergray-image.jpg"],
    "colors": [{"name":"Espresso", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/13/espresso.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/13/espresso-image.jpg"},{"name":"Feather Gray", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/13/feathergray.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/13/feathergray-image.jpg"}],
    "price":1499,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/13/gallery1.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/gallery2.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/gallery3.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/13/gallery4.jpg"]
  },
  {
    "item_id":14,
    "productName":"Woven Leather Barstool",
    "type":"Counter Stools",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/14/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/14/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/14/07.jpg"],
    "colors": [{"name":"Black", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/14/black.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/14/02.jpg"},{"name":"Gray", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/14/gray.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/14/06.jpg"}],
    "price":149,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":15,
    "productName":"Gold Dipped Barstool",
    "type":"Counter Stools",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/15/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/15/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/01-navy-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/04-red-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/15/06.jpg"],
    "colors": [{"name":"Navy", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/15/navy.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/15/01-navy-image.jpg"},{"name":"Red", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/15/red.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/15/04-red-image.jpg"}],
    "price":299,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":16,
    "productName":"Cord Stripe Indoor/Outdoor Rug",
    "type":"Rugs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/16/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/16/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/01-coral-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/03-mitem_idnight-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/16/07.jpg"],
    "colors": [{"name":"Mitem_idnight", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/16/mitem_idnight.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/16/03-mitem_idnight-image.jpg"},{"name":"Coral", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/16/coral.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/16/01-coral-image.jpg"}],
    "price":299,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"]
  },
  {
    "item_id":17,
    "productName":"Vines Wool Rug",
    "type":"Rugs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/17/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/17/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/01-neutral-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/05-lagoon-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/07.jpg"],
    "colors": [{"name":"Neutral", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/17/neutral.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/17/01-neutral-image.jpg"},{"name":"Blue Lagoon", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/17/lagoon.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/17/05-lagoon-image.jpg"}],
    "price":1199,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/17/gallery1.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/gallery2.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/gallery3.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/17/gallery4.jpg"]
  },
  {
    "item_id":18,
    "productName":"Beacon Rug",
    "type":"Rugs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/18/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/18/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/03.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/04-bergamot-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/05-blue-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/06.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/18/07.jpg"],
    "colors": [{"name":"Bergamot", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/18/Bergamot.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/18/04-bergamot-image.jpg"},{"name":"Deep Blue Sky", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/18/Blue.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/18/05-blue-image.jpg"}],
    "price":899,
    "gallery": ["https://i.imgur.com/7bhsMY3.jpg", "https://i.imgur.com/iGbIKJD.jpg", "https://i.imgur.com/USgnFaC.jpg", "https://i.imgur.com/Srsyleh.jpg", "https://i.imgur.com/UDrfhjJ.jpg", "https://i.imgur.com/9E3WqkA.jpg"],
  },
  {
    "item_id":19,
    "productName":"Cozy Plush Rug",
    "type":"Rugs",
    "imageDefault":"http://carousel-we.s3-us-west-1.amazonaws.com/19/00.jpg",
    "images": ["http://carousel-we.s3-us-west-1.amazonaws.com/19/00.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/01.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/02.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/03-gray-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/04.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/05.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/06-rose-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/07.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/08-white-image.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/09.jpg"],
    "colors": [{"name":"Frost Gray", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/19/gray.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/19/03-gray-image.jpg"},{"name":"White", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/19/white.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/19/08-white-image.jpg"},{"name":"Adobe Rose", "url":"http://carousel-we.s3-us-west-1.amazonaws.com/19/rose.jpg", "image":"http://carousel-we.s3-us-west-1.amazonaws.com/19/06-rose-image.jpg"}],
    "price":999,
    "gallery": ["http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery1.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery2.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery3.jpg","http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery4.jpg"]
  }  
]

const seed = () => {
Product.create(data)
.then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
})
.catch(err => console.error(err));
}

seed();