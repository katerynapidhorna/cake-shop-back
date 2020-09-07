'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class product_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_cart.init({
    productId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    productAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_cart',
  });
  return product_cart;
};