'use strict';
const { User, Product } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [];
    const users = await User.findAll({ attributes: ['id'] });
    const products = await Product.findAll({ attributes: ['id'] });
    const max = Math.min(users.length, products.length);

    for (let i = 0; i < max; i++) {
      arr.push({
        productId: products[i].dataValues.id,
        userId: users[i].dataValues.id,
        number: Math.floor(Math.random() * 50),
      });
    }

    await queryInterface.bulkInsert('Carts', arr);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Carts', null, {});
  },
};
