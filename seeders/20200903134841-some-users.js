"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
       
          fullName: "Kate",
          email: "kate@kate.com",
          password: "kate1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        
          fullName: "emnet",
          email: "emnet@emnet.com",
          password: "ement1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
