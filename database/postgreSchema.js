const Sequelize = require('sequelize');
const db = require('./postgreSequelize.js');


const Product = db.define('product', {
  product: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image_default: {
    type: Sequelize.STRING,
    allowNull: false
  },
  furniture_type: {
    type: Sequelize.INTEGER,
    references: {
      model: 'types',
      key: 'id'
    }
  }

}, {timestamps: false})

const Images = db.define('images', {
  url: {
    type: Sequelize.STRING
  }
}, {timestamps: false});

const Gallery = db.define('gallery', {
  url: {
    type: Sequelize.STRING
  }
}, {timestamps: false});

const Types = db.define('types', {
  furniture_type: {
    type: Sequelize.STRING
  }
}, {timestamps: false});

const Colors = db.define('colors', {
  color: Sequelize.STRING,
  url: Sequelize.STRING
}, {timestamps: false});


Product.belongsTo(Types);
Types.hasMany(Product);

Product.belongsToMany(Images, { through: 'product_images', timestamps: false});
Product.belongsToMany(Gallery, { through: 'product_gallery', timestamps: false});
Product.belongsToMany(Colors, { through: 'product_colors' , timestamps: false});
Colors.belongsToMany(Product, { through: 'product_colors' , timestamps: false});
Gallery.belongsToMany(Product, { through: 'product_gallery', timestamps: false});
Images.belongsToMany(Product, { through: 'product_images' , timestamps: false});




module.exports = {Product, Colors, Gallery, Images, Types}