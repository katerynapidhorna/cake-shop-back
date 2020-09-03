'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(models.cart);
      // define association here
    }
  };
  product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT,
    ingredients: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};