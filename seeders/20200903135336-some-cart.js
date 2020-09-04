"use strict";
const User = require("../models").user;
const Product = require("..models").product;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({ where: { email: "kate@kate.com" } });
    const user2 = await User.findOne({ where: { email: "emnet@emnet.com" } });
    const product1 = await Product.findOne({ where: { name: "starry night" } });
    const product2 = await Product.findOne({
      where: { name: "simple cupcake" },
    });
    const product3 = await Product.findOne({
      where: { name: "chocolate cupcake" },
    });

    await queryInterface.bulkInsert(
      "carts",
      [
        {
          productId: product1.id,
          amount: 3,
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: product3.id,
          amount: 5,
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: product2.id,
          amount: 2,
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("carts", null, {});
  },
};
