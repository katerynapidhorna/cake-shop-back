"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasOne(models.cart);
      order.hasOne(models.payment);
    }
  }
  order.init(
    {
      billingAddress: DataTypes.STRING,
      shippingAddress: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER,
      isComplete: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
