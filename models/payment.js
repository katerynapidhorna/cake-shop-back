"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      payment.belongsTo(models.order);
    }
  }
  payment.init(
    {
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
