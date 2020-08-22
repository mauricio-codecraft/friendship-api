'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('preorder', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      traveller_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product_category',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      max_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      min_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      max_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('preorder');
  },
};
