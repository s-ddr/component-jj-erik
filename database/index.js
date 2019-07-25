var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel',  { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')
});

var productSchema = new mongoose.Schema({
  item_id: Number,
  productName: String,
  type: String,
  imageDefault: String,
  images: [], // 6
  colors: [{name: String, url: String, image: String}],
  price: Number,
  gallery: [] // min 3
});

var Product = mongoose.model('product', productSchema);

module.exports = Product;