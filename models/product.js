"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(models.cart),
        {
          through: "product_cart",
          foreignKey: "productId",
        };
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      imgUrl: DataTypes.TEXT,
      ingredients: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
