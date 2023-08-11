const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Product = require('./Product'); // Require the Product model

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'categories',
  }
);

// Set up associations
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = Category;