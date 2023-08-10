const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    underscored: true,
    modelName: 'Category', // Change to 'Category'
    tableName: 'categories', // Change to 'categories'
  }
);

module.exports = Category;