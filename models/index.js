// import models
const Product = require('../../../lessons/13-ORM/02-Challenge/Develop/models/Product');
const Category = require('../../../lessons/13-ORM/02-Challenge/Develop/models/Category');
const Tag = require('../../../lessons/13-ORM/02-Challenge/Develop/models/Tag');
const ProductTag = require('../../../lessons/13-ORM/02-Challenge/Develop/models/ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
