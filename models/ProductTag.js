const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // Change to 'Product'
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // Change to 'Tag'
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'ProductTag', // Change to 'ProductTag'
    tableName: 'product_tags', // Change to 'product_tags'
  }
);

// Establish associations with Product and Tag
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

module.exports = ProductTag;