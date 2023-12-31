const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product'); // Require the Product model
const Tag = require('./Tag'); // Require the Tag model

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tags',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'product_tags',
  }
);

// Set up associations
ProductTag.belongsTo(Product, { foreignKey: 'product_id' });
ProductTag.belongsTo(Tag, { foreignKey: 'tag_id' });

module.exports = ProductTag;