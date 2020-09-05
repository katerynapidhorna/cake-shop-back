"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cart.belongsTo(models.customer);
      cart.hasMany(models.product, {
        through: "product_cart",
        foreignKey: "cartId",
      });
      cart.hasMany(models.order, {
        foreignKey: "cartId"
      } )
    }
  }
  cart.init(
    {
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cart",
    }
  );
  return cart;
};
