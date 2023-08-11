const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Product = require('./Product'); // Require the Product model

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'tags',
  }
);

// Set up associations
Tag.belongsToMany(Product, { through: 'product_tags', foreignKey: 'tag_id' });

module.exports = Tag;