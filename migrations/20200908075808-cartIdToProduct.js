'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.addColumn('products', 'cartId', {
       type: Sequelize.INTEGER,
      references: {
        model: 'carts',
        key:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
     });
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.removeColumn('products','cartId');
  }
};