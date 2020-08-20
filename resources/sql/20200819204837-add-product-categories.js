'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_category', [
      {
        description: 'Electronic',
      },
      {
        description: 'Food',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('product_category'
        , {id: {[Op.in]: [1, 2]}}, {});
  },
};
