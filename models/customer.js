"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customer.hasOne(models.cart);
    }
  }
  customer.init(
    {
      firstName: DataTypes.STRING,
      allowNull: false,
      lastName: DataTypes.STRING,
      allowNull: false,
      email: DataTypes.STRING,
      allowNull: false,
      password: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "customer",
    }
  );
  return customer;
};
