'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [];
    const desc = 'крутой товар #';
    for (let i = 0; i <= 10; i++) {
      arr.push({
        name: desc + i,
        price: i * 100,
        description: 'описание товара ' + 'крутой товар',
        image: '/img/' + i,
        number: Math.floor(Math.random() * 4500) + 500
      });
    }
    await queryInterface.bulkInsert('Products', arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
